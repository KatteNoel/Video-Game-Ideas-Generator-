import React from 'react';

import { Generator } from './components/generator';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './App.css';

function App() {
  let settings = ["cyberpunk", "fantasy", "sci-fi", "post-apocalyptic", "space", "mystery", "steampunk", "coming-of-age", "folktale", 
  "historical", "Japanese", "medieval", "satirical", "urban", "western", "nautical", "comedic", "thriller", "noir", "romance",
  "Lovecraftian", "gothic", "horror", "Viking"];
  let genres = ["RPG", "platformer", "puzzle game", "metroidvania", "souls-like", "visual novel", "narrative game", "action game", 
  "adventure game", "genre-bender", "shooter", "JRPG", "CRPG", "walking sim", "clicker", "FPS"];
  let artstyles = ["pixel-art", "cartoony", "muted", "pastel", "floral", "one-bit", "realistic", "gritty", "hand-drawn", "Gameboy", 
  "colorful", "cute", "creepy", "anime", "low poly", "black-and-white", "stylized", "abstract", "geometric", "comicbook", "neon"];

  return (
    <Container>
      <h1>Video Game Ideas Generator</h1>
      <Generator settings={settings} genres={genres} artstyles={artstyles}/>
      <footer className="footer">Site made in 2022 by Katte Noel.</footer>
    </Container>
  );
}

export default App;
