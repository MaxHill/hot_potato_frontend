var Vue = require('./vue-register');

/**
 * Vue root instance
 */
var App = Vue.extend({
    components: {}
});

var VueRouter = require('vue-router');
var Router = new VueRouter({history: true});
Router.map(require('./routes.js'));
Router.start(App, '#app');

