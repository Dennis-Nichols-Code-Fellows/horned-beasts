//imports
import React from "react";
import HornedBeast from "./HornedBeast.js";

//Component


class Main extends React.Component {
  render() {

   let beast_list = this.props.data.map((item) => {
     
      return (
        <HornedBeast
          key={item._id}
          title={item.title}
          src={item.image_url}
          alt={item.description}
          img_title={item.keyword}
          description={item.description}
          handleOpenModal={this.props.handleOpenModal}
        />
      );
    });

    return (
      <>
        <h2>Gallery of Beasts: Click on Pictures to Like 💖</h2>
        <article>{beast_list}</article>
      </>
    );
  }
}

export default Main;
