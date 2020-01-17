import React, { Component } from 'react';

class Subject extends Component {
    render(){ //function생략
      return (
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;