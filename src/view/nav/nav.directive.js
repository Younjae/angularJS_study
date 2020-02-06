const angular =   require('angular');
const md =        require('../view.module');

md.directive('navDirective', __directive);

function __directive(){
    return{
        //템플릿의 경로
        templateUrl: 'src/view/nav/nav.html',
        //컨트롤러 지정
        controller: 'view.nav.Controller',
        //컨트롤러 이름 지정
        controllerAs: 'navCtrl'
    }
}