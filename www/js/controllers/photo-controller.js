App.controller('photo-controller', ['$scope', 'Camera', function($scope, Camera) {
	$scope.photo = "";
	$scope.takePhoto = function() {
        var options = {
            sourceType:1,
            quality:60,
            correctOrientation:true
        };
        
        Camera.getPicture(options).then(function (imageURI) {
            Camera.toBase64Image(imageURI).then(function(_result) {
                $scope.photo = _result.imageData;
            }, null);
        }, null);
    }
}]);