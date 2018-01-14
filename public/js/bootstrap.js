console.log('module', appBB);

appBB.controller('CarouselDemoCtrl',  function ($scope) {
    
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    var images = ["./images/Verona_Juliet_balcony.jpg","./images/Verona_Giardino_Giusti.jpg","./images/Verona_Piazza_Erbe.jpg", "./images/Verona_scorcio_case_mazzi.jpg", "./images/Verona_piatto_tipico_pastisada.jpg"]
    for(let i = 0; i < images.length; i++) {
        slides.push(
            { image: images[i],id: i}
        )
    }
    
  });