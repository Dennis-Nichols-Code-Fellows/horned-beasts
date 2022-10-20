//imports
import React from "react";
import HornedBeast from "./HornedBeast.js";

//Component

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      beasts: this.props.data,
    };
  }

  filter = () => {
    if (this.state.query) {
      return this.props.data.filter((beast) => {
        return beast.title.toLowerCase().includes(this.state.query);
      });
    } else {
      return this.props.data;
    }
  };

  onChange = (e) => {
    this.setState({
      query: e.target.value.toLowerCase(),
    });
    this.filter();
  };

  render() {
    let filtered_beasts = this.filter();
   
    let beast_list = filtered_beasts.map((item) => {
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
        <div className="search">
          <input
            placeholder="Search Beasts.."
            type="search"
            name="search"
            onChange={this.onChange}
          />
        </div>
        <article>{beast_list}</article>
      </>
    );
  }
}

export default Main;
