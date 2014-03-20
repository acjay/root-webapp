'use strict';

angular.module('rootWebappApp')
  .directive("tree", function($compile) {
    return {
        restrict: "E",
        scope: {data: '=', name: '='},
        template: 
        	// TODO: Use a directive w/transclusion to render the names/icons/expand control
            '<p ng-if="name"><a href="" ng-click="toggle()">{{ data.expanded && "-" || "+" }} {{ name }}</a></p>'+
            '<ul ng-show="data.expanded">' + 
                '<li ng-repeat="(childName, childData) in data.children">' + 
                    '<tree name="childName" data="childData"></tree>' +
                '</li>' +
            '</ul>',
        compile: function(tElement, tAttr) {
            var contents = tElement.contents().remove();
            var compiledContents;

            if (!tAttr.expanded) { tAttr.expanded = true; }

            return function(scope, iElement, iAttr) {
                if(!compiledContents) {
                    compiledContents = $compile(contents);
                }

                scope.toggle = function toggle() {
                	scope.data.expanded = !scope.data.expanded;
                };

                compiledContents(scope, function(clone, scope) {
                    iElement.append(clone); 
                });
            };
        }
    };
});
