app.directive('parallax', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/parallax.html'
  }
});
