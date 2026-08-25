import Creator from '../components/Creator';

function ShowCreators({creators}){
  return (
    <div>
      <h1>Content Creators </h1>

      <button onClick={()=>window.location.href ='/new'}>
        Add Creator
      </button>
      
      {creators.length === 0?(
        <p>No content creators found. </p>
      ) : (
        <div className="creator-grid">
        {creators.map((creator)=>(
          <Creator
            key={creator.name}
            name={creator.name}
            url={creator.url}
            description={creator.description}
            imageURL={creator.imageURL}
            />
        ))}
      </div>
      )}
    </div>
  );
}

export default ShowCreators;