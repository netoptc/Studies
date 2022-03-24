
import {useState, useEffect} from 'react'
import db from './services/firebaseConnection';

import { getDocs, getDoc, addDoc, setDoc, doc, collection, onSnapshot, updateDoc, deleteDoc} from 'firebase/firestore';
import "./style.css"
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth, signOut, signInWithEmailAndPassword} from 'firebase/auth';

function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState(['']);
  const [postid, setPostId] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');
  const [userState, setUserState] = useState(false);
  const [dataUser, setDataUser] = useState({});

  async function setPost(titulo, autor){
    // Adicionando um novo post com id aleatorio
    await addDoc(collection(db, "posts"), {
      author: autor,
      title: titulo
    })
    .then(()=>{
      console.log('Post cadastrado com sucesso');
      setTitulo('');
      setAutor('');
    })
    .catch((error)=>{
      console.log(error);
    })
  
    /* ALDICIONANDO UM POST E PASSANDO O SEU ID, SE JA EXISTIR IRA ATUALIZAR
    await setDoc(doc(db, "posts", 3), {
      author: autor,
      title: titulo
    })
    .then(()=>{
      console.log('Post cadastrado com sucesso');
    })
    .catch((error)=>{
      console.log(error);
    })
      */
  }

  //Obetem apenas o post com o id passado
  async function getPost(idPosts){
    await getDoc(doc(db, "posts", idPosts))
    .then((snapshot)=>{
      setAutor(snapshot.data().author)
      setTitulo(snapshot.data().title)
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  //Obetem todos os posts
  async function getAllPost(){
    await getDocs(collection(db, "posts"))
    .then((snapshot)=>{
      let lista = [];
      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          title: doc.data().title,
          author: doc.data().author
        });
      })
      setPosts(lista);
    })
    .catch((error)=>{
      console.log(error);
    })
    
  
  }

  //Atualizadno um post
  async function updatePost(postid){
    await updateDoc(doc(db,"posts", postid),{
      author: autor,
      title: titulo
    })
    .then(()=>{
      console.log('Atualizado com sucesso')
    })
    .catch((error)=>{
      alert(`Erro: ${error}`)
    })
  }


  //Deletando um post
  async function deletPost(postid){
    await deleteDoc(doc(db, "posts", postid))
    .then(()=>{
      console.log('Post deletado com sucesso')
    })
    .catch((error)=>{
      console.log(`Erro: ${error}`)
    })
  }

  async function createUser(){
    
      await createUserWithEmailAndPassword(getAuth(),email,senha)
      .then(async (value)=>{
        //Inserido os dados do usuairo me uma collection(obs o uid é unico)
        await setDoc(doc(db,"users",value.user.uid), {
          nome: nome,
          cargo: cargo
        })
        .then(()=>{
          setNome('');
          setCargo('');
          setEmail('');
          setSenha('');
          console.log('usuario cadastrado');
        })
        .catch((error)=>{
          console.log(error);
        })
      
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  async function login(){
    await signInWithEmailAndPassword(getAuth(),email, senha)
    .then(()=>{
      console.log('Login efetuado com sucesso!')
    })
    .catch((error)=>{
      console.log(`Erro ao efetuar o login: ${error}`)
    })

  }

  async function logout(){
    await signOut(getAuth())
    .then(()=>{
      console.log('logout feito com sucesso!')
      setDataUser([])
    })
    .catch((error)=>{
      console.log(`Error: ${error}`)
    })
  }

  useEffect(()=>{
    async function loadPosts(){
      //onSnapshot é chamado toda vez que atulaiza os dados (Real time)
      await onSnapshot(collection(db, "posts"), (doc) => {
        getAllPost();
      })
    }

    loadPosts();
  },[])

  
  useEffect(()=>{
    async function checkLogin(){
      await onAuthStateChanged(getAuth(),(user)=>{
        //Verificando se o usuario esta logado
        if(user){
          //Obtem os dados do usuario
          async function dataUser(){ 
            await getDoc(doc(db, "users", user.uid))
            .then((snapshot)=>{
              setDataUser({
                nome: snapshot.data().nome,
                cargo: snapshot.data().cargo
              })
            
            })
            .catch((error)=>{
              console.log(error);
            });
          }

          dataUser();
          setUserState(true);
        }else{
          setUserState(false)
        }
      })
    }
    checkLogin();
  },[])

  return (
    <div>
        <h1>Firebase</h1>
        <h2>Login</h2>
        <div className='container'>
          <label>Nome</label>
          <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
          <label>Cargo</label>
          <input type="text" value={cargo} onChange={(e)=>setCargo(e.target.value)}/>
          <label>Email</label>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Senha</label>
          <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/><br/>
          <button onClick={createUser}>Criar usuario</button>
          <button onClick={login}>login</button>
          <button onClick={logout}>Logout</button>
        </div>
        
        <hr/><br/>
        
        
        {Object.keys(dataUser).length > 0 &&(
          <div>
            <strong>Bem vindo: {dataUser.nome}</strong><br/>
            <strong>Cargo: {dataUser.cargo}</strong><br/>
          </div>
        )}
        {userState && (
            
          <div className='container'>
            <h2>Banco de dados</h2>
            <label>ID:</label>
            <textarea typeof='text' value={postid} onChange={(e)=>{setPostId(e.target.value)}}/>
            <label>Titulo:</label>
            <textarea typeof='text' value={titulo} onChange={(e)=>{setTitulo(e.target.value)}}/>
            <label>Autor:</label>
            <textarea typeof='text' value={autor} onChange={(e)=>{setAutor(e.target.value)}}/>
            <button onClick={ () => {setPost(titulo,autor)} }>Cadastrar</button>
            <button onClick={ () => {updatePost(postid)} }>Update</button>
            <button onClick={ () => {getPost(postid)} }>Buscar</button>
            <button onClick={ getAllPost }>Buscar ALL</button>
          
            <ul>
              {posts.map((post)=>{
                return(
                  <li key={post.id}>
                    <span>ID: {post.id}</span><br/>
                    <span>Titulo: {post.title}</span><br/>
                    <span>Autor: {post.author}</span><br/>
                    <button onClick={()=>{deletPost(post.id)}}>Deletar</button><br/><br/>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        
     
    </div>
  );
}

export default App;
