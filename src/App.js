//start with imports
import React from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import SelectedBeast from "./components/SelectedBeast.js";
import "./App.css";
import data from "./data.json";


//then build then component (we're using classes, but functions are the newer syntax)

//start by extending the basic react component
class App extends React.Component {
  //make a render function to display on screen
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      img_src: '',
      img_alt: '',
      name: '',
      selectedVal: '',
    };
  }

  handleCloseModal = () => {
    this.setState(
      {showModal: false
      })
    };

  handleOpenModal = (title,src,alt) => {
    this.setState(
      {showModal: true,
        selectedBeast: title,
        img_src: src,
        img_alt: alt
      })
    };
  
  render() {
    //need to use onChange for updating state from the form
    return (
      <>
        <Header />
        <Main
          data={data}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          title = {this.state.selectedBeast}
          src={this.state.img_src}
          alt={this.state.img_alt}
        />
        <Footer />
      </>
    );
  }
};

//then export it
export default App;
