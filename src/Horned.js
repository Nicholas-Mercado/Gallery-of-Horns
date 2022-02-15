import React from "react";

class HornedBeast extends React.Component{
  render(){
    return(
      <>
        <article> 
          <h2>{this.props.name}</h2>
          <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title}></img>
          {/* Brady Camp helped me with image syntax */}
          <p>{this.props.description}</p>
        </article>
      </>
    )
  }
}

export default HornedBeast;