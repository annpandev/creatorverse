import {useNavigate} from 'react-router-dom';
import {supabase} from '../client.js';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function ViewCreator(){
  const navigate = useNavigate();
  const {name} = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(()=>{
    async function fetchCreator(){
      const {data, error} = await supabase
      .from('creators')
      .select('*')
      .eq('name',name)
      .single();

      if(error){
        console.log(error);
      }else{
        setCreator(data);
      }
    }
    fetchCreator();
  }, [name]);

  if(!creator){
    return <p>Loading ...</p>;
  }
return(
<div>
  <h1>{creator.name}</h1>
  {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}

  <p>{creator.description}</p>
  <p>URL: {creator.url}</p>

  <a href={creator.url} 
     target="_blank" 
     rel="noreferrer"
     style={{marginRight:'12px'}}>
    Visit Creator
  </a>
  <button onClick={()=>navigate(`/edit/${name}`)}>
    Edit
  </button>

</div>
)}

export default ViewCreator;

