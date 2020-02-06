const angular = require('angular');
//angluar animation사용을 위해서 require를 포함하여 module 선언
var viewModule = angular.module('viewModule', [require('angular-animate')]);

viewModule.run(function($rootScope){
    //메뉴를 보여주고 숨기는것을 보여주기 위한 rootScope에 속한 boolean 변수
    $rootScope.navMenu = true;
})

module.exports = viewModule;