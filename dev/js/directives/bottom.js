app.directive('bottom', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/bottom.html'
  }
});
