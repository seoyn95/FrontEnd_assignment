import './App.css'
import List from '../components/List/List'
import Introduce from '../components/Introduce/Introduce'
import MyProfile from '../components/MyProfile/MyProfile'
import Neighbor from '../components/Neighbor/Neighbor'
import logo_ver from './assets/likelion_logo_ver.png'
import { postData } from './constants/postData'
import { useState } from 'react'
import Writing from '../components/Writing/Writing'
//App.jsx

function App() {
  var title = "LikeLion HUFS"

  const [posts, setPosts] = useState(postData);

  const handleAddPost = (newTitle, newContent) => {
    const newPost = {
      id: Date.now(),
      title: newTitle,
      content: newContent,
      author: {
        name: '한서연',
        role: '14기 아기사자',
        profileImg: '/profile.png',
      },
      tags: [],
      likes: 0,
      createdAt: '2026-04-21',
    };
    setPosts([...posts, newPost]);
  };

  const handleLike = (id) => {
    setPosts(posts.map(function(post) {
      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(function(post) {
      return post.id !== id;
    }));
  };

  return (
    <>
      <div className='navbar'>
        <span className='navbar-title'>{title} 블로그</span>
      </div>

      <div className='blog-layout'>
        <div className='blog-main'>
          <div style={{textAlign: 'center'}}>
            <img src={logo_ver} alt='멋사 로고 가로' className='likelion_logo_ver' width={500} />
          </div>

          <Introduce />

          {posts.map(function (data) {
            return (
              <List
                data={data}
                key={data.id}
                handleLike={handleLike}
                handleDelete={handleDelete}
              />
            );
          })}

          <Writing handleAddPost={handleAddPost} />
        </div>


        <div className='blog-right'>
          <MyProfile />
          <Neighbor />
          
        </div>
      </div>
    </>
  )
}

export default App
