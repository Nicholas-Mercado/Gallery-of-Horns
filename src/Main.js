import React from "react";
import HornedBeast from "./Horned";

class Main extends React.Component{
  render(){
    return(
      <main>
      <HornedBeast />
        <article>
          <h3>Title</h3>
          <p>img</p>
          <p>Description</p>
        </article>
        
      </main>
    )
  }
}

export default Main;