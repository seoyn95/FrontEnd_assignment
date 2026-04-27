import './List.css'
import profileImg from '../../src/assets/profile.png'



function List({ data }) {
  const { title, content, createdAt, author, tags, likes } = data;
  return(
    <>
    <div className='list'>

      <div className='profileimg'>
        <img src={profileImg} className='imgg' />&nbsp;
        <span>{author.name}</span>&nbsp;&lt;{author.role}&gt;<br/>
      </div>
      <hr/>
      <div className='title'>{title}</div><br></br>
      <div>{content}</div>      
      <div className='tag'>
        {tags.map(function(tag) {
          return <span key={tag}>#{tag}</span>
        })}
      </div><br/>
      <div><span>♥</span>&nbsp;{likes}</div>
      <div className='date'>{createdAt}</div>
    </div>
    </>
  )

}
// function List(props) {

//   return(
//       <div className='list'>
//         <div className='profileimg'>
//           <p><img src={profileImg} className='imgg'/> &nbsp; 코딩왕 김코딩</p>
//         </div>
//         <h3>안녕하세요. 아기사자입니다.</h3>

//         <p>집에 가고 싶어요. 종강주세요.</p>
//         <span>♥</span>12
//         <p style={{color : 'gray'}}>2026년 1월 1일</p>
//       </div>
//   )
// }

export default List