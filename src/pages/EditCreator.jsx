import {supabase} from '../client.js';
import {useParams} from 'react-router-dom';
import{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function EditCreator({onDelete}){
  const navigate = useNavigate();
  const {name} = useParams();
  const[creatorName, setCreatorName] = useState('');
  const[creatorURL, setCreatorURL] = useState('');
  const [creatorDescription, setCreatorDescription] = useState('');
  const [creatorImageURL, setCreatorImageURL] = useState('');

  useEffect(()=>{
    async function getCreator(){
      const {data, error} = await supabase
      .from('creators')
      .select('*')
      .eq('name',name)
      .single();

      if(error){
        console.log(error);
      }else{
        setCreatorName(data.name);
        setCreatorURL(data.url);
        setCreatorDescription(data.description);
        setCreatorImageURL(data.imageURL);
      }
    }
    getCreator();
  }, [name])

  async function handleSubmit(){
    const {data, error} = await supabase
    .from('creators')
    .update({
      name: creatorName,
      url: creatorURL,
      description: creatorDescription,
      imageURL: creatorImageURL
    })
    .eq('name',name)

    if(error){
      console.log(error);
    }else{
      navigate('/') }

  }

  async function handleDelete(){
    const {data, error} = await supabase
    .from('creators')
    .delete()
    .eq('name',name);

    if(error){
      console.log(error);
    }else{
      onDelete(name);
      navigate('/');
    }
  }

  return(
    <div>
      <h1>Edit Creator</h1>

      <input 
      type="text"
      value={creatorName}
      onChange={(e)=>setCreatorName(e.target.value)}
      />

      <input 
      type="text"
      value={creatorURL}
      onChange={(e)=>setCreatorURL(e.target.value)}
      />

      <input
      type="text"
      value={creatorDescription}
      onChange={(e)=>setCreatorDescription(e.target.value)}
      />

      <input 
      type="text"
      value={creatorImageURL}
      onChange={(e)=>setCreatorImageURL(e.target.value)}/>

      <button onClick={handleSubmit}>
        Submit
      </button>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default EditCreator;