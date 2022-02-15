import React from "react";
import HornedBeast from "./Horned";
import './Main.css';

class Main extends React.Component{
  render(){
    let finalData = [];
    this.props.data.forEach((hornsB, index) =>{
      finalData.push (
        <HornedBeast
          key={index}
          title={hornsB.title}
          image_url={hornsB.image_url}
          description={hornsB.description}
          keyword={hornsB.keyword}
          horns={hornsB.horns}
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