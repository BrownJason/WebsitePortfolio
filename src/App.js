import React, {
  Component
} from 'react'
import classes from './App.css'
import Home from './HomeContainer/Home'
import NavComponent from './NavComponent/NavComponent'
import { Route } from 'react-router'
import { MuiThemeProvider } from '@material-ui/core'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className={classes.App}>
          <NavComponent />
          <Route path='/' component={Home} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
