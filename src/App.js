import React from 'react';
import {Route,Link} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }


  unsuscribeFromAuth=null;

  componentDidMount(){
    this.unsuscribeFromAuth=auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user})
      console.log(user);
    })
  }

componentWillUnmount(){
  this.unsuscribeFromAuth();
}

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </switch>
      </div>
    );
  }
  }
 

export default App;
