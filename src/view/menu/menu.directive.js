const angular =    require('angular');
const menuModule = require('../view.module');

menuModule.directive('menuDirective', __directive);

function __directive(){
    return{
        //템플릿 지정
        templateUrl: 'src/view/menu/menu.html',
        //컨트롤러 지정
        controller: 'view.menu.Controller',
        //컨트롤러 이름 지정
        controllerAs: 'menuCtrl'
    }
}