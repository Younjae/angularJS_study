const angular = require('angular');
const md =      require('../view.module');
const jQuery =  require('jquery')
import img from '../../img/icon-arrow.png'

md.controller('view.nav.Controller', __controller)

function __controller($scope, $rootScope){
    //html src태그에 이미지 경로 직접 넣으면 webpack 패키징에서 에러발생, jQuery이용
    jQuery('#navImg').attr("src", img);
    jQuery('#navImg').click(function(){
        //탭 메뉴 열고 닫기
        if($rootScope.navMenu){
            //이미지 180도 회전
            jQuery('#navImg').css('transform','rotate(180deg)');
            //angularjs의 감시자는 jQuery에서 변경된 내용을 view에 자동으로 반영하지 않음
            //수동으로 변경하도록 호출
            $rootScope.$apply(function(){
                $rootScope.navMenu = false;
            })
        }
        else{
            jQuery('#navImg').css('transform','rotate(360deg)');
            $rootScope.$apply(function(){
                $rootScope.navMenu = true;
            })
        }
    })
}