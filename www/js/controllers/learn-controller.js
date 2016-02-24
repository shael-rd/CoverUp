// CONTROLLER: learn-controller
// Controls the learn page.
// Injects: $scope, $rootScope, $ionicPopover, Photo, Labels
app.controller('learn-controller', ['$scope', '$ionicPopover', 'Photo', 'Labels', function($scope, $ionicPopover, Photo, Labels) {
    $scope.labels = Labels.labels;
    $scope.photoService = Photo;
    
    $scope.curLabel = '';


    var template = '<ion-popover-view class="label-popover">' + '<h3 class="title">{{curLabel}}</h3>' + '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });

    $scope.openPopover = function($event, index) {
        console.log(index);
        $scope.index = {value:index};
        $scope.curLabel = $scope.labels[index].label;
        $scope.popover.show($event);
    }
}])