'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');
//web pack allows this to be required in- and renders it into a js file

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Welcome to Cowville';

  cowsayCtrl.speak = function(input) {
    $log.debug('cowsayCtrl.speak');
    return cowsay.say({text: input || 'mooooooo'});
  };

  cowsayCtrl.logger = function(input) {
    $log.debug('cowsayCtrl.logger');
    $log.log(input);
  };
};
