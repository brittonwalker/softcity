!function(){function t(t){this.getProjects=function(){t.get("https://soft-city.herokuapp.com/api/projects").then(function(t){console.log("hey mon")})}}angular.module("softCity").service("ProjectService",["$http",t])}();