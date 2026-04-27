import './App.css'
import List from '../components/List/List'
import Introduce from '../components/Introduce/Introduce'
import MyProfile from '../components/MyProfile/MyProfile'
import Neighbor from '../components/Neighbor/Neighbor'
import logo_ver from './assets/likelion_logo_ver.png'
import { postData } from './constants/postData'
//App.jsx

function App() {
  var title = "LikeLion HUFS"

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

          {postData.map(function (data) {
            return (
              <List
                data={data}
                key={data.id}
              />
            );
          })}

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
