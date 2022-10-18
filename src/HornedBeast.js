//imports
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//component

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes:0
    };
  };

  handleLikes = () => {
    this.setState({
      likes:this.state.likes + 1
    });
  }
  
  render() {
    return (
      // <>
      // <div className="beast">
      //  <h2>{this.props.title}</h2>
      //  <img src={this.props.src} alt={this.props.alt} title={this.props.img_title}/>
      //  <p>{this.props.description}</p>
      // </div>
      // </>

     
          <Card style={{ width: "18rem" }}>
            <Card.Img onClick={this.handleLikes} variant="top" src={this.props.src} alt={this.props.alt} title={this.props.img_title} />
            <Card.Body>
              <div id="card-upper">
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                ❤️ x {this.state.likes}
              </Card.Text>
              </div>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              
            </Card.Body>
          </Card>
      ); 
      }
  }


export default HornedBeast;