import {useNavigate} from 'react-router-dom';

function Creator({name, url, description, imageURL}) {
  const navigate = useNavigate();

  return (
    <article 
    className="creator-card"
    onClick={()=>navigate(`/creator/${name}`)}
    style={{cursor:'pointer'}}
    
    >

      {imageURL && (
        <img 
        src={imageURL} 
        alt={name}
        className="creator-image" 
        />
      )}

      <h2>{name}</h2>
      <p>{description}</p>

      <div className="creator-actions">
        <a
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={(e)=>e.stopPropagation()}
      >
        Visit Creator
      </a>

      <button 
      onClick={(e)=>{
        e.stopPropagation();
        navigate(`/edit/${name}`)
      }}>
        Edit
      </button>
      </div>
    </article>
  )
}

export default Creator;