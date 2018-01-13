appBB.directive('localeSelector', ["$state", "$translate", function($state, $translate) {
        // console.log("In locale");

        return {
            restrict: 'C',
            replace: true,
            templateUrl: 'directives/locale2.html',
            link: function(scope, elem, attrs) {
                // Get active locale even if not loaded yet:
                scope.locale = $translate.proposedLanguage();
                // console.log(scope.locale)
                scope.setLocale = function(locale) {
                    //$translate.use(scope.locale);
                    $state.go($state.current, {lang: locale}, {reload: true})
                    
                };
                // console.log(scope.locale)
            }
        };
    }]
);