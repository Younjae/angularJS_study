const angular =    require('angular');
const menuModule = require('../view.module');
const jQuery =     require('jquery');

menuModule.controller('view.menu.Controller', __controller)

function __controller($scope, $rootScope){
    //메뉴 배열
    $scope.menuArray = ['조회', '수정', '갱신', '삭제'];
    //화면이 완전히 만들어지고 난 후 이벤트를 구현해야 정상 작동
    jQuery(document).ready(function(){
        //클릭한 메뉴의 색상을 변경하기 위해 클릭한 메뉴만 selected클래스로 지정하고 나머지는 지정 해제
        jQuery('.menuTable tr').click(function(){
            jQuery(this).addClass('selected').siblings().removeClass('selected');
        });
    });
}