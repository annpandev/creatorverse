import {useRoutes} from 'react-router-dom';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import {supabase} from './client.js';
import {useEffect, useState} from 'react';

function App() {
  const [creators, setCreators] = useState([]);

  function handleDelete(name){
    setCreators((prevCreators)=>
      prevCreators.filter((creator)=> creator.name !== name)
    );
  }
  

  useEffect(()=>{
    async function fetchCreators(){
      const {data, error} = await supabase
        .from('creators')
        .select('*');

        if(error){
          console.log(error);
        }else{
          setCreators(data);
        }
      }
        fetchCreators();
    }, []);



  const routes = useRoutes([
    {
      path: '/',
      element: <ShowCreators creators={creators} />,
    },
    {
      path: '/creator/:name',
      element: <ViewCreator />
    },
    {
      path: '/edit/:name',
      element: <EditCreator onDelete={handleDelete} />,
    },
    {
      path: '/new',
      element: <AddCreator />,
    }
  ])
  return routes;
}

export default App;