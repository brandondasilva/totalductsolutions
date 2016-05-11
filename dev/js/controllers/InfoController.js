app.controller('InfoController',['$scope', function($scope) {
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      desc: "We are able to fulfill any of you custom HVAC needs. Download the fitting list PDF below for a complete list of our common duct fittings.",
      icon: "more_horiz",
      tooltip: "View Here"
    }, {
      desc: "We offer a variety of different custom duct solutions. Whether it's a standard or custom order, we will find a solution to fit your job's requirements.",
      icon: "email",
      tooltip: "Contact Us!"
    }, {
      desc: "Our fully functioning fabrication shop provides a full range of equipment capable of manufacturing any of your needs. Our fabricators are fully licensed and their attention to detail ensures your fittings are done correctly.",
      icon: "arrow_forward",
      tooltip: "View Equipment List"
    }
  ];
}]);