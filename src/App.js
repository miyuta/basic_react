import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


class App extends Component {
  constructor(props){ //컴포넌트가 실행 될 때 초기화 담당
    super(props);
    this.state = {
      subject:{title:'WEB', sub:"world wide web!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for impormation'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'HTML is for interactive'}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
