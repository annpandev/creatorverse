import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {supabase} from '../client.js'

function AddCreator() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription]= useState('');
  const [imageURL, setImageURL] = useState('');

  return (
    <div>
      <h1>Add Creator</h1>

      <input
        type="text"
        placeholder="Creator Name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />

        <input 
        type="text"
        placeholder="Creator URL"
        value={url}
        onChange={(e)=> setUrl(e.target.value)}
        />

        <input 
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        />

        <input 
        type="text"
        placeholder="Image URL"
        value={imageURL}
        onChange={(e)=> setImageURL(e.target.value)}
        />

        <p>Creator name: {name}</p>
        <p>Creator URL: {url}</p>
        <p>Description: {description}</p>
        <p>Image URL: {imageURL}</p>

        <button onClick={handleSubmit}>
    Submit
  </button>
    </div>
  )

  async function handleSubmit(){
    const creator = {
      name: name,
      url: url,
      description: description,
      imageURL: imageURL
    };

    const {data, error} = await supabase
    .from ('creators')
    .insert(creator);

    if(error){
      console.log(error);
    }else{
      navigate('/');
    }
  }

}

export default AddCreator;