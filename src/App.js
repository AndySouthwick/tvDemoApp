import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import ManagePage from "./page/manage/index";
import PreviewPage from "./page/preview/index";

class App extends Component {
   state = {
    tvShow: {
      name: '',
      imgUrl: '',
      rating: ''
    },
    showList: []
  }

  update = (tvShow) => {
    this.setState(prevState => ({
      tvShow,
      showList: [...prevState.showList, tvShow]
    }))
    this.setState({
      tvShow: {
        name: '',
        imgUrl: '',
        rating: ''
      }
    })
  }
   managePage = () => {
    return <ManagePage updateShow={this.update} theShowList={this.state.showList} tvShow={this.state.tvShow}/>
  }
  previewPage = () => {
    return <PreviewPage theShowList={this.state.showList}/>
  }

render(){
     console.log('from app.js render', this.state)
  return (
    <div>
      <nav>
        <Link to="/">Manage Page</Link>
        <Link to="/preview">Preview Page</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={this.managePage}/>
        <Route  path="/preview" component={this.previewPage}/>
      </Switch>
    </div>
  );
}

}

export default App;
