import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import db from '../services/firebaseConnection';

export const AuthContext = createContext({});


function AuthProvider({children}){
    const [user,setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading,setLoading] = useState(true);



    async function SingIn(email, password){
       
        setLoadingAuth(true)
        
        await signInWithEmailAndPassword(getAuth(),email, password)
        .then(async (value)=>{

            await getDoc(doc(db, "users", value.user.uid))
            .then((snapshot)=>{
                let data = {
                    uid: snapshot.data().uid,
                    nome: snapshot.data().nome,
                    email: snapshot.data().email,
                    avatarUrl: snapshot.data().avatarUrl,
                }
                setUser(data);
                storageUser(data);
                toast.success('Bem vindo a platadorma!');
            })
        }).catch((error)=>{
            console.log(error)
            toast.error('Ops algo deu errado!');
        })

        setLoadingAuth(false)
    }

    async function SingUp(nome, email, password){
        setLoadingAuth(true)

        
        await createUserWithEmailAndPassword(getAuth(), email, password)
        .then( async (value)=>{
            await setDoc(doc(db,"users", value.user.uid),{
                uid: value.user.uid,
                nome: nome,
                email: email,
                avatarUrl: null,
            })
            .then(()=>{
                let data = {
                    uid: value.user.uid,
                    nome: nome,
                    email: email,
                    avatarUrl: null,
                };
                setUser(data);
                storageUser(data);
                toast.success('Bem vindo a platadorma!');
            })

        }).catch((error)=>{
            console.log(error);
            toast.error('Ops algo deu errado!');
        })
      
        setLoadingAuth(false);
    }

    async function SingOut(){
        await signOut(getAuth());
        localStorage.removeItem('UserAuth');
        setUser(null);
    }

    function storageUser(data){
        localStorage.setItem('UserAuth', JSON.stringify(data));
    }

    useEffect(()=>{
        const storageUser =localStorage.getItem('UserAuth')

        if(storageUser){
            setUser(JSON.parse(storageUser));   
        }
        setLoading(false)
    },[])

    return(
        //O operador !! verifica o objeto se tiver algo dentro retorna true sen ão retorna false
        <AuthContext.Provider value={{signed:!!user, user, loading, SingUp, SingIn, SingOut, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;