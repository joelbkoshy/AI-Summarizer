angular.module("routeApp", ["ngRoute"])
    .controller('mainController', function ($scope, $rootScope) {
        $scope.username = '';
        $scope.password = '';
        $scope.submitForm = function () {
            $rootScope.name = "Hello " + $scope.username;
            console.log($rootScope.name);
            $scope.username = '';
            $scope.password = '';
        }
    })

    .controller('homeController', function ($scope, $http) {
        $http.get('https://joelbkoshy.github.io/Angular-JS/data.json').then(function (response) {
            $scope.datas = response.data;
        });
     } )
     
     .controller("searchController", function ($scope, $rootScope) {
        $scope.item = "";
        $scope.setSearch = function () {
            $rootScope.search = $scope.item;
        }
    })

    .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "intro.html",
                    controller: "mainController"
                })
                .when("/intro", {
                    templateUrl: "intro.html",
                    controller: "mainController"
                })
                .when("/services", {
                    templateUrl: "services.html",
                    controller: "homeController"
                })
                .when("/blog", {
                    templateUrl: "blog.html",
                    controller: "signupController"
                })
                .when("/contact", {
                    templateUrl: "contact.html",
                    controller: "signupController"
                });
        })
            .config(['$locationProvider', function ($locationProvider) {
                $locationProvider.hashPrefix('');
            }])
