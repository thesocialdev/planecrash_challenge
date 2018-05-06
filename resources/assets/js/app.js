
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('../../../node_modules/openlayers/dist/ol.js');

window.Vue = require('vue');

Vue.use(require('vue-resource'));
Vue.use(require('vuelayers'));

article = require('./article');

article.init();

