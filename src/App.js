import React, { Component } from 'react';
import gr_white from './assets/images/gr_white.png';
import './App.css';
import './assets/css/index.css';
import './assets/css/laptops.css';

const meta = {
  title: 'Some Meta Title',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
      charset: 'utf-8',
      name: {
          keywords: 'react,meta,document,html,tags'
      }
  }
};
class App extends Component {
  
  render() {
    return ( 
      

      <div className="row padding100">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <div className="column green-bg">
          <img 
            src={gr_white}
            alt="Canvas Logo"
            className="grimgsize grimgpadding"
            />
          <div className="homecaptionpadding">
            <p className="whiteFont size-h1">
            "Hey Kate, there's a surprise coming your way in 14 minutes!"
            </p>
            <br/>
            <br/>
            <p className="whiteFont">
              Share the link and surprise the recipient Or Track the delivery yourself
            </p>
            <br/>
            <br/>
            <br/>
            <p className="whiteFont">
              Real Time Trackable Delivery
            </p>
          </div>
        </div>
        <div className="column column2padding">
          <div className="fullwidth">
            <div className="welcomeMsg">
              Welcome to 
              <label className="grfontcolor">
                &nbsp;Giftrapt
              </label><br/>
            </div>
            <div>
              <label className="grtag">Buy local when you can't be local</label>
            </div>
            <div className="divMargin">
              <label>Login</label>
            </div>
            <div className="divMarginTop">
              <input className="username" type="text"/>
            </div>
            <div className="divMarginTop">
              <input className="secret" type="password"/>
            </div>
            <div>
              <input type="checkbox" name="Remember me" value="true"/>
              <label className="remember"> Remember me</label>
            </div>
            <div className="divMarginTop">
              <button className="loginBtn whiteFont" type="button">Login</button>
              <button className="grfontcolor createAcctBtn" type="button">Create New Account</button>
            </div>
            <div  className="divMarginTop">
              <button className="facebookBtn whiteFont" type="button">Login with Facebook</button>
              <button className="grfontcolor gplusBtn" type="button">Login with Google+</button>
            </div>
            <div className="storeLoginCtr  divMarginTop"><a href="" target="blank" className="storeLogin"> Store Login</a></div>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
