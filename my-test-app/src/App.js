import logo from './logo.svg';
import './App.css';

// App Component
//  - Header
//  - NavBar
//  - CardsList
//    - Card

import Header from `./components/Header`;
import NavBar from `./components/Navbar`;
import CardsList from `./components/CardsList`;

// Import CardData
import cardData from './cardData';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <CardsList 
        // We'll need to pass props here, more specifically
        // an Array of Card objects
      />
    </div>
  );
}

export default App;
