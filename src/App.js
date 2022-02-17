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
    beast: {},
    data
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

  handleSelect =(event) => {
    console.log(event.target.value);
    let selected = event.target.value;

    if(selected === 'One'){
      let newData = data.filter(data => data.horns === 1)
      this.setState({data: newData})
    } else if(selected === 'Two'){
      let newData = data.filter(data => data.horns === 2)
      this.setState({data: newData})
    } else if(selected === 'Three'){
      let newData = data.filter(data => data.horns === 3)
      this.setState({data: newData})
    } else if(selected === 'One-Hundred'){
      let newData = data.filter(data => data.horns === 100)
      this.setState({data: newData})
    } else if(selected === 'All'){
      this.setState({data: data})
    }
  }

  render(){
    return(
    <>
      <SelectedBeast 
      showModal={this.state.showModal} 
      handleCloseModal={this.handleCloseModal} 
      beast={this.state.beast} 
      />
      
      <Header />
      <Main 
      handleSelect={this.handleSelect}
      data ={this.state.data}
      handleShowModal ={this.handleShowModal}  
      />
      <Footer />
    </>
    );

  }
}

export default App;