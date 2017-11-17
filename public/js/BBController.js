//something
appBB.controller("BBController", BBController);

BBController.$inject = ["$state", "$stateParams", "$sce", "$rootScope", "$http"];

function BBController($state, $stateParams, $sce, $rootScope,$http) {
    // var tb = document.getElementById('Apt2')
    // tb.addEventListener("click", function(event){
    //     console.log("pressed")
    // })
    console.log("here");
    
    
    var self = this;
    console.log(self)
    self.map1 = $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.3796219221226!2d11.002030615225646!3d45.4420057429457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f36f889ec79%3A0x368e0dcf1358ac49!2sVia+Giosu%C3%A8+Carducci%2C+25C%2C+37129+Verona+VR%2C+Italy!5e0!3m2!1sen!2sus!4v1498937455719");
    // self.map2 = $sce.trustAsResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.9879349191206!2d10.97646651522595!3d45.44989924241916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e1ffc1c256a9%3A0x451e7a1b99d14fd4!2sVia+Giovanni+da+Verrazzano%2C+8%2C+37138+Verona+VR%2C+Italy!5e0!3m2!1sen!2sus!4v1498937881976")

    self.active = $stateParams.id;
    
    $http
    .get("rooms.json")
    .then(function(response){
        console.log(response.data.rooms)
        $rootScope.rooms = response.data.rooms;
    });

    self.myParams = parseInt($stateParams.id) - 1;


    self.apartments = [{

            
            images_url: ['images/Residenza_Carducci_Suite_SUD.jpg',"images/Residenza_carducci_bedroom_detail.jpg", 'images/Residenza_Carducci_dettaglio_bagno.jpg', 'images/Residenza_Carducci_Suite_Sud_kitchenette.jpg', 'images/Residenza_Carducci_dettaglio_decorativo.jpg', 'images/Residenza_Carducci_salotto.jpg'],
            amenities: ["2 rooms", "Kitchenette", "Parking", "Air conditioning", "Laundry", "Free wifi"],            
            conditions: ["no smoking","check-in: btw 1PM and 9PM", "check-out: 11 AM","-","please contact us if you plan to arrive outside the regular check-in hours"],
            map: self.map1,
            address: {
                street: "Via Carducci 25/C",
                Zip: "37129",
                City: "Verona",
                Country: "Italia",
                Tel: "0039 045 8034501",
                Cell: "0039 347 8545386",
                Email: 'info@residenzacarducci.com'
            }
        },

        {
            
            images_url: ["images/Residenza_Carducci_letto_dietro.jpg","images/Residenza_Carducci_bedroom.jpg","images/Residenza_Carducci_kitchenette.jpg","images/Residenza_Carducci_Suite_Nord2.jpg","images/Residenza_Carducci_Cortile.jpg"],
            amenities: ["2 rooms", "Kitchenette", "Parking", "Air conditioning", "Laundry", "Free wifi"],
            conditions: ["no smoking","check-in: btw 1PM and 9PM", "check-out: 11 AM","-","please contact us if you plan to arrive outside the regular check-in hours"],
            map:self.map1,
            address: {
                street: "Via Carducci 25/C",
                Zip: "37129",
                City: "Verona",
                Country: "Italia",
                Tel: "0039 045 8034501",
                Cell: "0039 347 8545386",
                Email: 'info@residenzacarducci.com'
            }
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
