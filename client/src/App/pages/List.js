import React, { Component } from "react";


class List extends Component {
  // initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }
  
  // Fetch the list 
  componentDidMount() {
    fetch('http://localhost:8000/api/getList')
    .then((res) => res.json())
    .then(list => this.setState({ list }));
  }


  render() {
    const { list } = this.state;

    return(
      <div className="App">
        <h1>List of Items</h1>
        {/** Check to see if any items are found */}
        {list.length ? (
          <div>
            {/** Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;