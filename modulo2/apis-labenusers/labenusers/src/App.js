import React from 'react';
import Signup from './components/Signup/Signup';
import Userlist from './components/Userlist/Userlist';





export default class App extends React.Component {

  state = {
    page: "userlist",
  };

  selectPage = () => {
    console.log(this.state.page)
    switch (this.state.page) {
      case "signup":
        return <Signup pageUser={this.pageUser} />;
      case "userlist":
        return <Userlist pageSingUp={this.pageSingUp} />;
      default:
        return <div> Erro!, Página não encontrada </div>
    }
  }

  pageSingUp = () => {
    this.setState({ page: "signup" });
  };

  pageUser = () => {
    this.setState({ page: "userlist" });
  };

  render() {
    return (
      <div>     
     
      {this.selectPage()}
           
      </div>
    )
  }
}

