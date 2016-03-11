/**
 * The potato view.
 * @type {Object}
 */
module.exports = {
    template: require('./potato.template.html'),
    components: {
        players: require('../components/players'),
        gamearea: require('../components/gamearea')
    }
};
