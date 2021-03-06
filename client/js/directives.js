(function()
{
'use strict';

/* Directives */
angular.module('arbapp.directives', []).
  directive("numdrink", function()
  {
    return {
      restrict: "A",
      link: function(scope, element, attrs)
      {
        attrs.$observe("numdrink", function(newValue)
        {
          var output = "";
          for (var i = 0; i < attrs.numdrink; i++)
          {
            output += "b";
            // output += "<img src='/img/beer-icon.png'>";
          }
          element.html(output);
        });
      }
    };
  }).
  // Execute a function on enter keypress. This directive is working but is specific to chat.
  // Fix it so that it works on any input element.
  directive("onenter", function()
  {
    return {
      restrict: "A",
      link: function(scope, element, attrs)
      {
        element.bind("keypress", function(event)
        {
          if (event.which === 13)
          {
            if (scope.chat)
            scope.$apply(attrs.onenter, scope.chat);
          }
        });
      }
    };
  });
})();
