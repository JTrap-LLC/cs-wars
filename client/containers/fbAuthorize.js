import React, { Component, Fragment, PureComponent } from 'react';
import { addFacebookScript } from '../fbScript';
// >> second try to get onSuccess
// import PropTypes from 'prop-types';


class FacebookAuthorize extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    // static propTypes = {
    //     loading: PropTypes.bool.isRequired,
    //     onSuccess: PropTypes.func.isRequired,
    //     onFailure: PropTypes.func.isRequired,
    // };
    async componentDidMount() {
        try {
            await addFacebookScript();
            const params = {
                appId: '703959263493590',
                cookie: true,                     // Enable cookies to allow the server to access the session.
                xfbml: true,                     // Parse social plugins on this webpage.
                version: 'v8.0'
            };
            FB.init(params);
            FB.getLoginStatus(resp => {
                console.log('FB Status: ', resp.status);
            });
        } catch (error) {
            console.log(error.name, ':', error.message);
        }
    }
    handleClick = () => {
        const { loading, onSuccess } = this.props;
        console.log('THIS IS ON SUCCESS: ', onSuccess);
        console.log('THIS IS THE PROPS STUFF: ', this.props);
        if (loading) {
            return;
        }

        FB.getLoginStatus((resp) => {
            console.log('FB: status: ', resp.status);
            const params = {
                provider: 'facebook'
            };
            if (resp.status === 'connected') {
                params.fbAccessToken = resp.authResponse.accessToken;
                console.log('this is the access token: ', params.fbAccessToken)

                FB.api('/me', (response) => {
                });
                // onSuccess(params, this.props.currentUser);
                console.log('params: ', params);
                console.log('this.props.currentUser: ', this.props.currentUser)
                return;
            }

            FB.login((resp) => {
                if (resp.authResponse) {
                    FB.api('/me', (response) => {
                        console.log('this is the response object after FB.login: ', response)
                        console.log('Good to see you, ' + response.name + '.');
                    });
                    params.fbAccessToken = resp.authResponse.accessToken;
                    // onSuccess(this.state, this.props.currentUser);
                    console.log('this.state: ', this.state);
                    console.log('this.props.currentUser: ', this.props.currentUser)
                }
            }, { scope: 'email' }); //// >>>>> adjustt later <<<<<<
        });
    }
    render() {
        return (
            <Fragment>
                <button
                    type='button'
                    className='btn facebook'
                    onClick={this.handleClick}
                >
                    Facebook
                </button>
            </Fragment>
        )
    }
}

export default FacebookAuthorize;