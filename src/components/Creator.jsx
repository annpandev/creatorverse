import {useNavigate} from 'react-router-dom';

function Creator({name, url, description, imageURL}) {
  const navigate = useNavigate();

  return (
    <article className="creator-card">

      {imageURL && (
        <img 
        src={imageURL} 
        alt={name}
        className="creator-image" />
      )}

      <h2>{name}</h2>

      <p>{description}</p>

      <div>
      <a 
      href={url} 
      target="_blank" 
      rel="noreferrer"
      >
        Visit Creator
      </a>

      <button onClick={()=>navigate(`/edit/${name}`)}>
        Edit
      </button>
      </div>
      
    </article>
  )
}

export default Creator;