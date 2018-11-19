class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedStatus: false,
            id : ''
        }
    }
    
    componentDidMount() {
        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : '',
                cookie     : true,  
                xfbml      : true,
                version    : 'v2.11'
            });

            window.FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
            }.bind(this));
        }.bind(this);

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=''";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'))
    }

    loggedIn(response) {
        this.setState({
            loggedStatus : true,
            id: response.authResponse.userID        
        });         
    }

    loggedOut() {
        this.setState({
            loggedStatus: false,
        })
    }

    statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        this.loggedIn(response)
        console.log(this.state);
    } else if (response.status === 'not_authorized') {
        this.loggedOut()
        console.log(this.state.loggedStatus);
    } else {
        this.loggedOut()
        console.log(this.state.loggedStatus);
    }
    }

    checkLoginState() {
    window.FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
    }.bind(this));
    }

    handleClick() {
    window.FB.login(this.checkLoginState());
    }

    render () {
        if (!this.state.loggedStatus) {
        return (
            <div className="fb-login-button" 
                 data-max-rows="1" 
                 data-size="large" 
                 data-button-type="continue_with" 
                 data-show-faces="false" 
                 data-auto-logout-link="true" 
                 data-use-continue-as="true">
            </div>   );
        } else {
            return (
                <Redirect to = {{
                    pathname : '/loggedin',
                    state : {
                        id: this.state.id
                    }
                }} />
            )
        }
    }
}