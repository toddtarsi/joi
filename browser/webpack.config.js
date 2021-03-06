'use strict';

const webpackConfigFactory = require('./build/webpack.config.factory');

module.exports = webpackConfigFactory({
    filename: 'joi-browser.min.js',
    targets: '> 1%, not IE 11, not dead',
});
