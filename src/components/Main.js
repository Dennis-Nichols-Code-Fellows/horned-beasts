//imports
import React from "react";
import HornedBeast from "./HornedBeast.js";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

//Component

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      beasts: this.props.data,
      selected_horns: null,
      filtering: false,
    };
  }

  filterName = () => {
    if (this.state.query) {
      return this.props.data.filter((beast) => {
        return beast.title.toLowerCase().includes(this.state.query);
      });
    } else {
      return this.props.data;
    }
  };

  filterHorn = () => {
  //  this.setState({filtering: false});
    if (this.state.selected_horns > 0) {
      return this.props.data.filter(beast => {
        return beast.horns === parseInt(this.state.selected_horns);
      });
    } else {
      return this.props.data;
    }
  };

  onChangeSearch = (e) => {
    this.setState({
      query: e.target.value.toLowerCase(),
    });
    this.filterName();
  };

  handleSelect = (event) => {
    console.log(event)
    let horns_number = event.target.value;
    console.log(`Horns number: ${horns_number}`);
    
    if (horns_number) {
    this.setState({
      selected_horns: horns_number,
    });
  }
  this.setState({filtering: false});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      filtering: true,
    })
  }

  stopFilter = () => {
    this.setState({
      filtering: false,
    })
    console.log(this.state.filtering);
  }

  render() {
    let filtered_beasts;
    if (this.state.filtering === true) {
      filtered_beasts = this.filterHorn();
    }
    else {
      filtered_beasts = this.filterName();
    }
    console.log(filtered_beasts);

    let beast_list = filtered_beasts.map((item) => {
      return (
        <HornedBeast
          key={item._id}
          title={item.title}
          src={item.image_url}
          alt={item.description}
          img_title={item.keyword}
          description={item.description}
          horns={item.horns}
          handleOpenModal={this.props.handleOpenModal}
        />
      );
    });

    return (
      <>
        <h2>Gallery of Beasts: Click on Pictures to Like 💖</h2>
        
        <Form onSubmit={this.handleSubmit}>
          <div className="search">
          <input
            placeholder="Search Beasts.."
            type="search"
            name="search"
            onChange={this.onChangeSearch}
          />
          </div>
          <Form.Group className="mb-3">
            <legend>Filter by Number of Horns?</legend>
            <Form.Select name="selected" id="" onChange={this.handleSelect}>
              <option value="null">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
            <Button type="submit">Filter!</Button>
          </Form.Group>
        </Form>
        <article>{beast_list}</article>
      </>
    );
  }
}

export default Main;
