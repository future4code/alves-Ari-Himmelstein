import React, { Component } from 'react'
import CreatePlayList from './components/CreatePlayList';
import ShowPlayList from './components/ShowPlayList';


export default class App extends Component {
  state = {
    page: "create",
  };

  
  selectPages = () => {
    switch (this.state.page) {
      case "create":
        return <CreatePlayList pageShow={this.pageShow} />;
      case "show":
        return <ShowPlayList pageCreate={this.pageCreate} />;
      default:
    }
  };

  pageCreate = () => {
    this.setState({ page: "create" });
  };

  pageShow = () => {
    this.setState({ page: "show" });
  };

  render() {
    return (
      <div>
         {this.selectPages()}
      </div>
    )
  }
}
