// CONTROLLER: learn-controller
// Controls the learn page.
// Injects: $scope, $rootScope, $ionicPopover, Photo, Labels
app.controller('learn-controller', ['$ionicScrollDelegate', '$scope', '$ionicPopover', 'Photo', 'Labels', function($ionicScrollDelegate, $scope, $ionicPopover, Photo, Labels) {
    $scope.labels = Labels.labels;
    $scope.photoService = Photo;
	$scope.createNew = false;
	$scope.invalidLabel = false;
	$scope.newLabel = "";
    
    $scope.curLabel = '';

    var poptemplate = '<ion-popover-view class="label-popover">' + '<h3 class="title">{{curLabel}}</h3>' + '</ion-popover-view>';
	var menu = '<ion-popover-view class="label-popover">' + '<h5 ng-show="createNew" class="title" ng-trim="true">Click somewhere</h5>' + '<h5 ng-hide="createNew" class="title" ng-trim="true">Label & click!</h5>' + '<input type="text" ng-model="newLabel" ng-change="sendInput(newLabel)">' + '<h3 ng-show="invalidLabel" class="title">invalid</h3>' + '<h3 class="title">{{$scope.xpos}}</h3>' + '<h3 class="title">{{$scope.ypos}}</h3>' + '<button class="button energized button-icon icon ion-ios-circle-filled label" ng-click="swapBool($scope)"></button>' + '</ion-popover-view>';
	
    $scope.popover = $ionicPopover.fromTemplate(poptemplate, {
        scope: $scope
    });
	$scope.menu = $ionicPopover.fromTemplate(menu, {
        scope: $scope
    });
	
	$scope.sendInput = function(newlabel) {
		$scope.newLabel = newlabel;
	}
	
	$scope.swapBool = function() {
		if ($scope.createNew) {$scope.createNew = false;}
		else {
			if ($scope.newLabel.length > 0)
			{
				$scope.invalidLabel = false;
				$scope.createNew = true;
			}
			else {$scope.invalidLabel = true;}
		}
	}
	
	$scope.addControl = function(event) {
		if ($scope.createNew) {
			$scope.createNew = false;
			$scope.xpos = (event.gesture.touches[0].pageX - 20 + $ionicScrollDelegate.getScrollPosition().left) / (0.01 * document.getElementById('imagecont').getBoundingClientRect().width);
			$scope.ypos = (event.gesture.touches[0].pageY - 45 - 23 + $ionicScrollDelegate.getScrollPosition().top) / (0.01 * document.getElementById('imagecont').getBoundingClientRect().height);
			Labels.addLabel($scope.xpos, $scope.ypos, $scope.newLabel);
		}
	}
	
    $scope.openPopover = function($event, index) {
        $scope.index = {value:index};
        $scope.curLabel = $scope.labels[index].label;
        $scope.popover.show($event);
    }
	$scope.openMenu = function($event, index) {
		$scope.menu.show($event);
	}
}])