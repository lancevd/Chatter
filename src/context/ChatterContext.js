import  { useState, useEffect, createContext } from "react";
import {collection, getDocs, setDoc, doc} from 'firebase/firestore'
import {db, auth, googleProvider, createWithMail, signInWihMail} from '../firebase'
import { MdAod } from "react-icons/md";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const ChatterContext = createContext()

const ChatterProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

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
                            bannerImage: doc.data().image ,
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

    async function addUserToDatabase  (user) {
        await setDoc(doc(db, 'Users', user.email), {
            email: user.email,
            name: user.displayName,
            imageUrl: user.photoURL,
            followerCount: 0,
            followingCount: 0,
            profileVisits: 0,
            posts: 0,
            occupation: 'Chatter Writer'

        }) 
    }

    const handleGoogleAuth = async (e) => {
        e.preventDefault()
        const userData = await signInWithPopup(auth, googleProvider)
        const userRep = userData.user
        // console.log(userRep)
        setCurrentUser(userRep)
        addUserToDatabase(userRep)
        console.log(currentUser )
        window.location.href = '/feed'
    }

    useEffect(() => {  
        console.log(currentUser)
    }, [currentUser])
    


    return (
        <ChatterContext.Provider 
        value={{posts,users, handleGoogleAuth, currentUser}}>
            {children}
        </ChatterContext.Provider>
    )
}


export {ChatterContext, ChatterProvider}