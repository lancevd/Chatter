import  { useState, useEffect, createContext } from "react";
import {collection, getDocs, setDoc, doc} from 'firebase/firestore'
import {db} from '../firebase'
import { MdAod } from "react-icons/md";

const ChatterContext = createContext()

const ChatterProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    
    useEffect(()=> {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'Users'))
    
           setUsers(
               querySnapshot.docs.map(doc => {
                    return{
                        id: doc.id,
                        data: {...doc.data()}
                    }
                })
           ) 
        }

        getUsers()
    },[])

    useEffect(()=> {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'Articles'))
    
           setPosts(
               querySnapshot.docs.map(doc => {
                    return{
                        id: doc.id,
                        data: {
                            body: doc.data().body,
                            brief: doc.data().brief,
                            category: doc.data().category,
                            postLength: doc.data().postLength,
                            bannerImage: doc.data().bannerImage,
                            title: doc.data().title,
                            comments: doc.data().commentCount,
                            likes: doc.data().likeCount,
                            views: doc.data().impression,
                            publishedOn  : doc.data().publishedOn.toDate(),
                            author: doc.data().author
                        }
                    }
                })
           ) 
        }

        getPosts()
    },[])

    return (
        <ChatterContext.Provider 
        value={{posts,users}}>
            {children}
        </ChatterContext.Provider>
    )
}


export {ChatterContext, ChatterProvider}