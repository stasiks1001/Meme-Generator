import { Link } from 'react-router-dom';

function Home() {
  const handleFunction = () => {};
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        alignItems:'center',
        justifyContent:'center', 
        
        }}>
      <h1 style={{color:"white"}}>Meme generator landing page</h1>
      <button
        type="submit"
        style={{
          height: '3rem',
          borderRadius: '10px',
          backgroundColor: ' rgb(128, 33, 252)',
          border: 'none',
          color: 'green',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
        onClick={handleFunction}
      >
        <Link
          to="/memes"
          style={{
            textDecoration: 'none',
            color: 'rgb(174, 255, 0)',
            backgroundColor: 'rgb(128, 33, 252)',
          }}
        >
          Go to Meme generator
        </Link>
      </button>
    </div>
  );
}

export default Home;
