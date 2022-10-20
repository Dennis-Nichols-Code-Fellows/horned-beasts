import React from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal className="modal" centered show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
         <Modal.Body>
            <img src={this.props.src} alt= {this.props.alt} />
         </Modal.Body>
        </Modal> 
      </>
    );
  }
}

export default SelectedBeast;