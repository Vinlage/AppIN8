import React from 'react';
import Home from './Pages/Home';
import Register from './Pages/Register';
import User from './Pages/User';
import Footer from './Pages/Footer';
import './global.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Home />
          <Register />
          <User />
          <Footer />
      </header>
    </div>
  );
}

export default App;
