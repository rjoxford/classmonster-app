import Ember from 'ember';
import Msal from "msal";

export default Ember.Controller.extend({

actions: {
    testConnect(){


        var userAgentApplication = new Msal.UserAgentApplication("your_client_id", null, function (errorDes, token, error, tokenType) {
              // this callback is called after loginRedirect OR acquireTokenRedirect (not used for loginPopup/aquireTokenPopup)
        })
        userAgentApplication.loginPopup(["user.read"]).then( function(token) {
            var user = userAgentApplication.getUser();
            // signin successful
            console.log('Successful login');
        }, function (error) {
            // handle error
            console.log('Unsuccessful login');
        });
    }
}

})
