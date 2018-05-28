import React, { Component } from 'react'
import classes from './Home.css'

class Home extends Component {
  render () {
    return (
      <div className={classes.Main}>
        Home
        <div className={classes.Border}>
          Text
        </div>
      </div>
    )
  }
}

export default Home
