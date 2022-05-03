import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage_component';
import { Switch, Route, Redirect } from 'react-router-dom';
import CheckoutPage from './pages/checkout/checkout_component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Authentication from './pages/authentication/authentication_component';
import Header from './components/header_component/header_component';
import AllCarsPage from './pages/all_cars/all_cars_component';
import { Component } from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import About from './components/about_us_component/about_component';
import Success from './components/booking_success_component/booking_success';
class App extends Component {
  //constructor used before the use of redux
  
  /*constructor(){
    super()

    this.state = {
      currentUser:null
    }
  }*/
  unsubscribeFromAuth = null;

  componentDidMount() {

    /*if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }*/

    navigator.geolocation.getCurrentPosition((pos)=>{
      console.log(`Longitude:  ${pos.coords.latitude}`)
      console.log(`Lattitude: ${pos.coords.latitude}`)
  })
  
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
           // id:snapShort.id,
          // ...snapShort.data()
        })
      }

      setCurrentUser(userAuth)


        // //this.setState({currentUser:user})
        // createUsserProfile(user)
        // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/all' component={AllCarsPage} />
          {/* <Route exact path="/signin" component={Authentication}/>  use before the introduction of redux*/}
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Authentication />)}/>
          <Route exact path="/success" component={Success}/>
        </Switch>
      </div>
    )
  }
}

const mapToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// const mapToProps= ({user})=>({
//   currentUser: user.currentUser
// })

const mapDisToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapToProps,mapDisToProps)(App)
