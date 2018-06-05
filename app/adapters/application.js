import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    coalesceFindRequests: true,
    // namespace: 'api/v1',
    //host 'localhost:1337'
    //host: 'http://cmserver-env.ganxffhdri.eu-west-2.elasticbeanstalk.com',


    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   "Access-Control-Allow-Headers": "Content-Type",
    //   "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    //   "Access-Control-Allow-Credentials" : "true",
    // },

    shouldReloadRecord: function() { return true; },
    shouldReloadAll: function() { return true; },
    shouldBackgroundReloadRecord: function() { return true; },
    shouldBackgroundReloadAll: function() { return true; }

    //this is dependent on production/development environment
    //It is configured in config/environment.js
    //host: ClientENV.hostUrl
    //add IP from $DOCKER_HOST if --docker flag is set
    //host: 'http://192.168.59.103:1337'
});
