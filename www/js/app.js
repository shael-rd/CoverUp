// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var defined = 0;
try {
  angular.module('starter');
} catch(err) {
  defineModule();
}
function defineModule() {
  defined++;
  console.log('defined' + defined);
  angular.module('starter', ['ionic'])
  .run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
    $rootScope.photo = null;
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('index', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })
    .state('photo', {
      url: '/photo',
      templateUrl: 'templates/photo.html',
      controller: 'photo-controller'
    })
    .state('learn', {
      url: '/learn',
      templateUrl: 'templates/learn.html',
      controller: 'learn-controller'
    })

    $urlRouterProvider.otherwise('/home');
  })
  
  // FACTORY: Labels
  // Contains information about labels on screen.
  .factory('Labels', [function() {
    _labels = [
      {
        x: 50,
        y: 20,
        label: 'Ash Cloud'
      }, {
        x: 25,
        y: 50,
        label: 'Lava Flow'
      }, {
        x: 50,
        y: 70,
        label: 'Main Pipe'
      }
    ];

    return {
      labels: _labels,
      addLabel: function (newX, newY, newLabel) {
        _labels.push({x: newX, y: newY, label: newLabel});
      }
    }
  }])

  // FACTORY: Photo
  // Contains all of the functions for taking and saving photos.
  // Injects: $q
  .service('Photo', ['$q', function($q) {
    this.setImage = function(img) {
      this.image = img;
    };

    this.getPicture = function (options) {
      var q = $q.defer();

      navigator.camera.getPicture(function (result) {
          q.resolve(result);
      }, function (err) {
          q.reject(err);
      }, options);

      return q.promise;
    };
    
    this.toBase64Image = function (img_path) {
      var q = $q.defer();
      window.imageResizer.resizeImage(function (success_resp) {
          //console.log('success, img toBase64Image: ' + JSON.stringify(success_resp));
          q.resolve(success_resp);
      }, function (fail_resp) {
          //console.log('fail, img toBase64Image: ' + JSON.stringify(fail_resp));
          q.reject(fail_resp);
      }, img_path, 1, 1, {
          imageDataType: ImageResizer.IMAGE_DATA_TYPE_URL,
          resizeType: ImageResizer.RESIZE_TYPE_FACTOR,
          format: 'jpg'
      });

      return q.promise;
    }
  }])

  // CONTROLLER: learn-controller
  // Controls the learn page.
  // Injects: $scope, $rootScope, $ionicPopover, Photo, Labels
  .controller('learn-controller', ['$scope', '$rootScope', '$ionicPopover', 'Photo', 'Labels', function($scope, $rootScope, $ionicPopover, Photo, Labels) {
    $scope.labels = Labels.labels;
    
    console.log($rootScope.photo)
    $scope.photo = $rootScope.photo;
    console.log($scope.photo);

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
    };
  }])

  // CONTROLLER: photo-controller
  // Controls the photo page.
  // Injects: $scope, $rootScope, Photo 
  .controller('photo-controller', ['$scope', '$rootScope', 'Photo', function($scope, $rootScope, Photo) {
    $scope.photo = null;
    $scope.takePhoto = function() {
      var options = {
        destinationType: navigator.camera.DestinationType.FILE_URI,
        quality: 60,
        correctOrientation: true,
        saveToPhotoAlbum: false
      };
      
      Photo.getPicture(options).then(function (imageURI) {
        Photo.toBase64Image(imageURI).then(function(_result) {
          $rootScope.photo = _result;
          $scope.photo = $rootScope.photo;
          console.log($rootScope.photo);
        }, null);
      }, null);
    };
    $scope.takePhotoFromGallery = function() {
      var options = {
        destinationType: navigator.camera.DestinationType.FILE_URI,
        quality: 75,
        correctOrientation: true,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY 
      };
      
      Photo.getPicture(options).then(function (imageURI) {
        Photo.toBase64Image(imageURI).then(function(_result) {
          $rootScope.photo = _result;
          $scope.photo = $rootScope.photo;
          console.log($rootScope.photo);
        }, null);
      }, null);
    }
  }])
}