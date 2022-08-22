import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const userCollectonRef = collection(db, "user");
class userService {
    addAnyPost = (newPost) => {
        return addDoc(userCollectonRef, newPost);
    };

    updatePost = (id, updatedPost) => {
        const postDoc = doc(db, "user", id);
        return updateDoc(postDoc, updatedPost);
    };

    deletePost = (id) => {
        const postDoc = doc(db, "user", id);
        return deleteDoc(postDoc);
    };

    getAllPosts = () => {
        return getDocs(userCollectonRef);
    };

    getPost = (id) => {
        const postDoc = doc(db, "user", id);
        return getDoc(postDoc)
    };
}

export default new userService();