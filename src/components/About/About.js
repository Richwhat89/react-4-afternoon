import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
        <Link to='/about' className='subnav_links'><h3>About</h3></Link>
        <Link to='/about/history' className='subnav_links'></Link><h3>History</h3>
        <Link to='/about/conact' className='subnav_links'></Link><h3>Contact</h3> 
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact' component={Contact}/>
            <Route path='/about' render={()=>(
              <div>
                <h1>About our University</h1>
              </div>
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}