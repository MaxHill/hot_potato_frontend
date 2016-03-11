/**
 * The players view.
 * @type {Object}
 */
module.exports = {
    template: require('./players.template.html'),
    data() {
        return {
            players: {}
        };
    },
    ready() {
        this.players = [
            {name: 'Max', score: 2000},
            {name: 'Rikard', score: 1900},
            {name: 'Carina', score: 1850},
            {name: 'Edward', score: 1700}
        ];
    }
};
