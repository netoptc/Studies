import { useState, createContext } from 'react';

export const UserContext = createContext({});


function UserProvider({children}){
    const [nome, setNome] = useState('João Queiroz')

    return(
        //children recebera tudo que estiver entre as tagas e todos os filhores teram acesso aos atributos passados no value
        <UserContext.Provider value= {{ nome, setNome }}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;