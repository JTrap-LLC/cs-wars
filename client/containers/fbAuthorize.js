import React, { Component, Fragment, PureComponent } from 'react';
import { addFacebookScript } from '../fbScript';
import fbImg from '../assets/fb-login.png';

class FacebookAuthorize extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    try {
      await addFacebookScript(); // >>>> this is where we connect to facebook's methods
      const params = {
        appId: '703959263493590',
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v8.0',
      };
      FB.init(params); // >>> sending credentials to facebook
      FB.getLoginStatus((resp) => {
        // >>> auto check for login status once page loads.
        console.log('FB Status: ', resp.status); // >>> possible responses: connected, not_authorized, unknown
      });
    } catch (error) {
      console.log(error.name, ':', error.message);
    }
  }
  handleClick = () => {
    // when you click facebook login icon

    FB.getLoginStatus((resp) => {
      console.log('FB: status: ', resp.status);
      const params = {
        provider: 'facebook',
      };
      if (resp.status === 'connected') {
        // if user is connected...
        params.fbAccessToken = resp.authResponse.accessToken; //>>> need accessToken to do further api calls
        console.log('this is the access token: ', params.fbAccessToken);

        FB.api('/me', (response) => {
          const { name, id } = response;
          console.log('name: ', name); //>>>> use these variables to change this.state
          console.log('id: ', id); //>>>> use these variables to change this.state
          this.props.setFacebookid(id); //>>>> Sets the Facebookid state (from App)
          // get the name from facebook
          const nameArr = name.split(' ');
          this.props.setFirstName(nameArr[0]);
          this.props.setLastName(nameArr[1]);
        });
        // onSuccess(params, this.props.currentUser);
        return;
      }

      FB.login(
        (resp) => {
          // if user is not connected... asks you to login
          if (resp.authResponse) {
            // facebook returns this resp object

            FB.api('/me', (response) => {
              const { name, id } = response;
              console.log('name: ', name); //>>>> use these variables to change this.state
              console.log('id: ', id); //>>>> use these variables to change this.state
              this.props.setFacebookid(id); //>>>> Sets the Facebookid state (from App)
              const nameArr = name.split(' ');
              this.props.setFirstName(nameArr[0]);
              this.props.setLastName(nameArr[1]);
            });
            params.fbAccessToken = resp.authResponse.accessToken;
            // onSuccess(this.state, this.props.currentUser);
          }
        },
        { scope: 'public_profile, email, user_friends' }
      ); //// >>>>> scope can be adjusted <<<<<<
    });
  };
  render() {
    return (
      <Fragment>
        <div id='face-button'>
          <button
            type='button'
            className='btn-facebook'
            onClick={this.handleClick}
            // style={`background: url(${fbImg})`}
          >
            <img
              id='facebook'
              style={{ width: '180px', height: 'auto' }}
              src={fbImg}
            />
          </button>
        </div>
      </Fragment>
    );
  }
}

export default FacebookAuthorize;
