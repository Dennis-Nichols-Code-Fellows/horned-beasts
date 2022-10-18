//imports
import React from "react";
import HornedBeast from './HornedBeast.js'
import data from './data.json'

//Component

let beast_list = [];
data.forEach(item => {
  beast_list.push(
    <HornedBeast key={item._id} title={item.title} src={item.image_url} alt = {item.description} img_title = {item.keyword} description = {item.description}/>
  )
});


class Main extends React.Component {
  render() {
    return (
      <>
        <h2>Gallery of Beasts: Click on Pictures to Like 💖</h2>
        <article>{beast_list}</article>
      </>
    );
    }
}

export default Main;
