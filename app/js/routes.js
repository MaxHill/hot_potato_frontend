module.exports = {
    '/': {
        component: require('./views/potato')
    },
    '*': {
        component: require('./views/404')
    }
};
