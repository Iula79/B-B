appBB.directive('localeSelector', ["$state", "$translate", function($state, $translate) {
        console.log("In locale");

        return {
            restrict: 'C',
            replace: true,
            templateUrl: 'directives/locale.html',
            link: function(scope, elem, attrs) {
                // Get active locale even if not loaded yet:
                scope.locale = $translate.proposedLanguage();
 
                scope.setLocale = function() {
                    //$translate.use(scope.locale);
                    $state.go($state.current, {lang: scope.locale}, {reload: true})
                };
            }
        };
    }]);