import  { useState, useEffect, createContext } from "react";
import {collection, getDocs, setDoc, doc} from 'firebase/firestore'
import {db} from '../firebase'

const ChatterContext = createContext()

const ChatterProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    
    useEffect(()=> {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'Users'))
    
            querySnapshot.docs.map(doc => console.log(doc.data))
        }

        getUsers()
    },[])

    return (
        <ChatterContext.Provider 
        value={{posts,users}}>
            {children}
        </ChatterContext.Provider>
    )
}


export {ChatterContext, ChatterProvider}