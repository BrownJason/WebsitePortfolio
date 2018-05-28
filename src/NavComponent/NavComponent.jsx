import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import classes from './Nav.css'

const NavComponent = () => (
  <div className={classes.Main}>
    <AppBar position='static'>
      <Toolbar>
        <Link to='/' className={classes.Link} >Home</Link>
      </Toolbar>
    </AppBar>
  </div>
)

export default NavComponent
