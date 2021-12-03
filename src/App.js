import './normalize.css';
import './skeleton.css';
import React, { Component } from 'react'
import './App.css';
import I from './I';
import Am from './Am';
import Chele from './Chele';
import G from './G';
import FadeIn from 'react-fade-in'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }
  }
  
  showI = (e) => {
    this.setState({
      modalOpen: true,
    })
  }
  showAm = (e) => {
    this.setState({
      modalOpen: true,
    })
  }
  showChele = (e) => {
    this.setState({
      modalOpen: true,
    })
  }
  showG = (e) => {
    this.setState({
      modalOpen: true,
    })
  }



  render() {
    return (
      <div className="container">
        <FadeIn>
        <I/>
        <br/>
        <Am/>
        <br/>
        <Chele/>
        <br/>
        <G/>
        </FadeIn>
      </div>
    );
}
}