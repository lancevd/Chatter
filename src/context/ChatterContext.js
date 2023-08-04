import  { useState, useEffect, createContext } from "react";
import {collection, getDocs, setDoc, doc} from 'firebase/firestore'
import {db, auth, googleProvider, createWithMail, signInWihMail} from '../firebase'
import { MdAod } from "react-icons/md";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const ChatterContext = createContext()

const ChatterProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [userActive, setUserActive] = useState(true)

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

    useEffect(() => {
        onAuthStateChanged(auth, (activeUser) => {
            setCurrentUser(activeUser)
        })
    })

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
        // Check if there is a user object in the local storage
        const activeUser = window.localStorage.getItem("ACTIVE_USER");
        if (activeUser) {
          setCurrentUser(JSON.parse(activeUser));
        }
      }, []);
    
      useEffect(() => {
        // Add a listener to update the user state when the authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (activeUser) => {
          if (activeUser) {
            // Save the user object in the local storage when the user is logged in
            window.localStorage.setItem("ACTIVE_USER", JSON.stringify(activeUser));
          } else {
            // Remove the user object from the local storage when the user is logged out
            window.localStorage.removeItem("ACTIVE_USER");
          }
          setCurrentUser(activeUser);
        });
    
        // Clean up the listener when the component is unmounted
        return () => unsubscribe();
    },[])
    
    const logOut = () => {
        signOut(auth).then(() => {
            // window.location.href = '/feed'
            alert('Logout successful')
          }).catch((error) => {
            console.log(error);
            
          });
        window.localStorage.removeItem('ACTIVE_USER')
    }


    return (
        <ChatterContext.Provider 
        value={{posts,users, handleGoogleAuth, currentUser, logOut}}>
            {children}
        </ChatterContext.Provider>
    )
}


export {ChatterContext, ChatterProvider}