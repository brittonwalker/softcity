(function(){
  angular
    .module( "softCity" )
    .service( "greenBar", [
      ServiceFunction
    ]);

    function ServiceFunction(){
      this.helloWorld = function(){
        $('.green').addClass('slide-out').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        //$('.green').removeClass('slide-out'); });
        console.log('yeah daddy');
      });
      };
      this.goodbyeWorld = function(){
        $('.green').addClass('slide-in').one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $('.green').removeClass('slide-out slide-in'); });
      };
    }
}());
