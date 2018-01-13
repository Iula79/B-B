//something
appBB.controller("BBController", BBController);

BBController.$inject = ["$state", "$stateParams", "$sce", "$rootScope", "$http"];

function BBController($state, $stateParams, $sce, $rootScope,$http) {
    // console.log("here");
    
    
    var self = this;
    // console.log(self)

    self.active = $stateParams.id;
    
    $http
    .get("rooms.json")
    .then(function(response){
        // console.log(response.data.rooms)
        $rootScope.rooms = response.data.rooms;
    });

    self.myParams = parseInt($stateParams.id) - 1;


    self.apartments = [
        {
            images_url: ['images/Residenza_Carducci_Suite_SUD.jpg','images/Residenza_carducci_bedroom_detail.jpg', 'images/Residenza_Carducci_dettaglio_bagno.jpg', 'images/Residenza_Carducci_Suite_Sud_kitchenette.jpg', 'images/Residenza_Carducci_dettaglio_decorativo.jpg', 'images/Residenza_Carducci_salotto.jpg']            
        },
        {    
            images_url: ['images/Residenza_Carducci_letto_dietro.jpg','images/Residenza_Carducci_bedroom.jpg','images/Residenza_Carducci_kitchenette.jpg','images/Residenza_Carducci_Suite_Nord2.jpg','images/Residenza_Carducci_Cortile.jpg']            
        }
    ];


    var myImages = self.apartments[self.myParams].images_url
    // console.log(myImages)

    self.arrayOfImageObj = myImages.map(function(el) {
        myObject = {
            src: el,
            visible: false
        };
        return myObject
    });

    // console.log(self.arrayOfImageObj);

}
