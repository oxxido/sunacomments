// Import angular
import 'angular';// from 'angular';

//import uiRouter from 'angular-ui-router';
import 'angular-ui-router';

import routes from './routes';


// import main css
require('../stylesheets/main.scss');

// modules:
import HomeModule from './components/home/home.module';

import Components from './components/components.module';

angular.module('oxxido', [
    //'ngRoute',
    'ui.router',
    HomeModule.name,
    Components.name
    ])
    .config(routes);