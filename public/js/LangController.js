appBB.controller('LangController', function($scope, $rootScope,$stateParams) {
         console.log("here")
         console.log($stateParams.locale)
        "use strict";

        $rootScope.className = 'lang';
        $rootScope.title = 'Lang';
        $scope.locale = $stateParams.locale;
    });