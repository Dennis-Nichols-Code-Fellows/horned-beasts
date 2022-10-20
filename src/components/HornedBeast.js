//imports
import React from "react";
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
  
  handleNameClick = () => {
    this.props.handleOpenModal(this.props.title, this.props.src, this.props.alt)
  }

  render() {
    return (
     
          <Card style={{ width: "18rem" }}>
            <Card.Img onClick={this.handleLikes} variant="top" src={this.props.src} alt={this.props.alt} title={this.props.img_title} />
            <Card.Body>
              <div id="card-upper">
              <Card.Title onClick={this.handleNameClick}>{this.props.title}</Card.Title>
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