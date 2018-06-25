var app = angular.module('restAPIApp', ['ngResource']);

app.factory("countries", function($resource){
    return $resource("https://restcountries.eu/rest/v2/currency/eur?fields=name;capital;currencies");
});

app.controller("restCountriesController", function($scope, countries){
    countries.query(function(data){
       $scope.countries = data; 
    }), function(err){
      console.error("Error occured: ", err);
    };
});