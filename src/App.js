import React from "react";
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import data from './data.json';
import SelectedBeast from "./SelectedBeast";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showModal:false,
    beast: {}
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal:false
    })
  }
  handleShowModal = (beast) => {
    this.setState({
      showModal:true,
      beast
    })
  }
  render(){
    return(
    <>
      <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} beast={this.state.beast} />
      <Header />
      <Main 
      data ={data}
      handleShowModal ={this.handleShowModal}  
      />
      <Footer />
    </>
    );

  }
}

export default App;