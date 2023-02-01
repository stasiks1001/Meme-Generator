import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Meme-generator.scss';

export default function MemeGenerator() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomeText: '',
    randomImage: '',
  });
  const [allMeme, setAllMemes] = useState('');

  const fetchMeme = () => {
    fetch('https://meme-api.com/gimme')
      .then((response) => response.json())
      .then((res) => setAllMemes(res.url));
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const handleRouterHomeButton = () => {};

  return (
    <>
      <main>
        <header>
          <div className="inner-header-container">
            <div className="header-left">
              <img src="/meme-face-image.png" alt="meme-face" />
              <h3>Meme Generator</h3>
            </div>

            <h5>React course - Project 3</h5>
          </div>
        </header>
        <form className="main-container">
          <div className="inputs">
            <input
              type="text"
              placeholder="top text"
              name="topText"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="bottom text"
              name="bottomeText"
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={fetchMeme}>
            Get a new meme image 🖼️
          </button>
          <div className="memes">
            {' '}
            <img src={allMeme} alt="meme" />{' '}
            {meme.topText && <h2 className="meme--text-top">{meme.topText}</h2>}
            {meme.bottomeText && (
              <h2 className="meme--text-bottom">{meme.bottomeText}</h2>
            )}
          </div>
        </form>
      </main>
      <button
        type="submit"
        className="home-button"
        onClick={handleRouterHomeButton}
      >
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'rgb(174, 255, 0)' }}
        >
          HOME
        </Link>
      </button>
    </>
  );
}
