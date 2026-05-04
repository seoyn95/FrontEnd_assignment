import './List.css'
import profileImg from '../../src/assets/profile.png'



function List({ data, handleLike, handleDelete }) {
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

      <div>
        <span onClick={() => { handleLike(data.id) }}> ♥&nbsp;</span>{likes}
      </div>
      <div className='date'>{createdAt}</div>
      <button className='delete_button' onClick={() => { handleDelete(data.id) }}>삭제</button>
    </div>
    </>
  )

}


export default List