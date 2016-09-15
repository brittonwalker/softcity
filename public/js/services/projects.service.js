(function(){
  angular
    .module( "softCity" )
    .service( "ProjectService", [
      '$http',
      ServiceFunction
    ]);

    function ServiceFunction($http){
      this.getProjects = function() {
        $http.get('https://soft-city.herokuapp.com/api/projects')
        .then(function(res) {
            // return vm.mydata = res.data;
            console.log('hey mon');
        })
      }
    }
}());
