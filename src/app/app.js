// Import angular
import 'angular';

import 'angular-ui-bootstrap';
import 'angular-ui-router';

import routes from './routes';


// import main css
require('../stylesheets/main.scss');

// modules:
import HomeModule from './components/home/home.module';

import Components from './components/components.module';

angular.module('oxxido', [
    'ui.bootstrap',
    'ui.router',
    HomeModule.name,
    Components.name
    ])
    .config(routes);