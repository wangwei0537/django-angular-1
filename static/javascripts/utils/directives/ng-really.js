/**
 * Created by andreas on 19/12/2015.
 */
/**
 * ngReallyClick
 * @namespace django-angular.utils.directives
 */
(function () {
    'use strict';

    angular
        .module('django-angular.utils.directives')
        .directive('ngReallyClick', ngReallyClick);

    /**
     * @namespace ngReallyClick
     */
    function ngReallyClick() {
        /**
         * @name Directive to display comfirmation alert
         * @desc The directive to be returned
         * @memberOf django-angular.utils.directives.ngReallyClick
         */
        var directive = {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    var message = attrs.ngReallyMessage;
                    if (message && confirm(message)) {
                        scope.$apply(attrs.ngReallyClick);
                    }
                });
            }
        };

        return directive;
    }
})();