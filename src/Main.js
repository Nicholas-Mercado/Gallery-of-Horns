import React from "react";
import HornedBeast from "./Horned";
// import data from './data.json';
import './Main.css';

class Main extends React.Component{
  render(){
    let finalData = [];
    this.props.data.forEach(hornsB =>{
      finalData.push (
        <HornedBeast
          title={hornsB.title}
          image_url={hornsB.image_url}
          description={hornsB.description}
          />
      )
    })
    return(
      <main>
       {finalData}
      </main>
    )
  }
}

export default Main;