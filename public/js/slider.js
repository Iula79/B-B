appBB.directive('slider', function($timeout) {
    
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'directives/slider.html',
        scope: {
            images: '='

        },
        link: function(scope, elem, attrs) {
            scope.currentIndex = 0;

            scope.next = function() {
                // console.log("clicked");
                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };

            scope.prev = function() {
                // console.log("clicked");
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            };

            // console.log(scope.currentIndex);
            // console.log(elem);
            scope.$watch('currentIndex', function() {
                scope.images.forEach(function(image) {
                    image.visible = false;
                });

                scope.images[scope.currentIndex].visible = true;
            });
            var timer;
            var sliderFunc = function() {
                timer = $timeout(function() {
                    scope.next();
                    timer = $timeout(sliderFunc, 3000);
                }, 3000);
            };

            sliderFunc();

            scope.$on('$destroy', function() {
                $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
            });
        }
    };
});
