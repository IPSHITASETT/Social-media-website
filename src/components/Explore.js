import {collection, onSnapshot, query, where } from "firebase/firestore";
import React,{useState, useEffect} from 'react';
import userServices from '../service/user.services';
import { db } from "../firebase-config";




const Explore = () => {
  const [htag, setHtag] = useState([])

  useEffect(()=>{
    getHtag()  //eta na korle load korar pore br br show korbe na console log e. Try koreo dekhte pari//
  },[])

  useEffect(()=>{
    console.log(htag) // map kore set korar por eta debo jate render hoy//
  },[htag])

  const userCollectonRef = collection(db, "user");
  const q = query(userCollectonRef, where("hashtag", "in", ["newlife"]));

  onSnapshot(q, (snapshot)=> {
    let user = []
    snapshot.docs.forEach((doc)=> {
      user.push({...doc.data(), id: doc.id})
    })
    console.log(user)
  })
  

  const getHtag = async () => {  //DB theke get korlam//
    const data = await userServices.getAllPosts(); //ami ekhane firestore theke data gulo array hisebe pelam metadata ba something bole//
    console.log(data.docs);
    setHtag(data.docs.map((doc) => ({datas: doc.data(), id: doc.id }))) //get korar por set korlam jate console e sob dekhte pai//
  }
  return (
    <div>
      <h5>Today's Hottest Trends are : </h5>
      <div>
        {htag.map(doc => (
      <p key ={doc.id}>{doc.datas.hashtag}</p>))} 
      {/* //hashtag gulo pelam feed e// */}
      </div>
    </div>
  )
}

export default Explore
