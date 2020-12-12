import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../styles/button';
import { Title } from '../styles/title';
import { CenterContainer } from '../styles/centeredContainer';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Title>Project Home</Title>
          {/** Link to List.js */} 
            <CenterContainer>
              <Link to={'./list'}>
                <Button variant="raised">
                  My List
                </Button>
              </Link>
            </CenterContainer>
      </div>
    );
  }
}

export default Home;
