import React, { useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import Explore from './components/Explore';


function App() {
  const [userId, setUserId] = useState("");

  const getUserIdHandler = (id) => {
    console.log("The id of the post to be edited : ", id);
    setUserId(id);


  }
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path='/' element={<><AddPost id={userId} setUserId={setUserId} />
          {<PostList getUserId={getUserIdHandler} />}
        </>
        }>
        </Route>
        <Route exact path='/explore' element={<Explore />}></Route>
      </Routes>
    </>
  );
}

export default App;
