app.directive('navbar', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/templates/navbar.html'
  }
});
