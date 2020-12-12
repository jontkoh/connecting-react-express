import React, { Component } from "react";
import { CenterContainer } from "../styles/centeredContainer";
import {Title} from '../styles/title';

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
        <Title>List of Items</Title>
        {/** Check to see if any items are found */}
        {list.length ? (
          <CenterContainer>
            {/** Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </CenterContainer>
        ) : (
          <CenterContainer>
            <h2>No List Items Found</h2>
          </CenterContainer>
        )
      }
      </div>
    );
  }
}

export default List;
