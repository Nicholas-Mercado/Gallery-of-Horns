import React from "react";
import './Horned.css';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     heart: 0,
    }
  }

    handleWaves = () => {
      this.setState({
        heart: this.state.heart + 1,
      })
    }
  render() {
    return(
      <>
        <article> 
          <h2>{this.props.title}</h2>
          <img onClick={this.handleWaves} src={this.props.image_url} alt={this.props.description} title={this.props.title}></img>
          <p>❤️:{this.state.heart}</p>
          <p>{this.props.description}</p>
        </article>
      </>
    )
  }
}

export default HornedBeast;