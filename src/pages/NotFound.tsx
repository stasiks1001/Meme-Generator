import { Link } from 'react-router-dom';

function NotFound() {
  const handleFunction = () => {};
  return (
    <>
      <h1>Not Found</h1>
      <button type='submit'
        style={{
          width: '100%',
          height: '3rem',
          borderRadius: '10px',
          backgroundColor: ' rgb(11, 195, 195)',
          border: 'none',
          color: 'green',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
        onClick={handleFunction}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'rgb(174, 255, 0)',
            backgroundColor: ' rgb(11, 195, 195)',
          }}
        >
          Home
        </Link>
      </button>
    </>
  );
}

export default NotFound;
