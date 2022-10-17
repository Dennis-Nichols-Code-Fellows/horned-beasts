//start with imports
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

//then build then component (we're using classes, but functions are the newer syntax)

  //start by extending the basic react component
class App extends React.Component {
  //make a render function to display on screen
  render() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
  }
}


//then export it
export default App;
