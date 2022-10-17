//imports
import React from "react";

//component

class HornedBeast extends React.Component {
  render() {
    return (
      <>
      <div class = 'beast'>
       <h2>{this.props.title}</h2>
       <img src={this.props.src} alt={this.props.alt} title={this.props.img_title}/>
       <p>{this.props.description}</p>
      </div>
      </>
    )
  }
}

export default HornedBeast;