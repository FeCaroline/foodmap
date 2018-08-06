$(document).ready(function () {
  $('.logo').delay('2000').fadeIn('slow')
});

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: new google.maps.LatLng(-23.5578108, -46.6625469),
      mapTypeId: 'roadmap'
  });


  var features = restaurantes.map(function (r) {
      return {
          position: new google.maps.LatLng(r.latitude, r.longitude),
          type: 'info'
      }
  });


  features.forEach(function (feature) {
      var marker = new google.maps.Marker({
          position: feature.position,
          map: map
      });
  });
}
$(document).ready(function () {

    for (restaurante of restaurantes) {
        var img = $('<img data-toggle="modal" data-target="#exampleModal"></img>').attr('src', restaurante.image).val(restaurante.type);
        img.attr('id',"restaurant-img");
        img.attr('value',restaurante.name);
        img.attr('name',restaurante.name);
        $("#restaurants").append(img);
    }

    $('#restaurant-search').click(function () {
        var inputValue = $('#search-text').val();

        $("img").each(function () {
            if ($(this).val() !== inputValue) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn('slow');

            }

        });
      })

    $('#search-text').on('input', function () {
        if ($(this).val() === "") {
            $("img").each(function () {
                $(this).fadeIn('slow')
            });

        }
    })

    $('#restaurant-img').click(function () {
      var h5 = $('.modal-title');
      var p = $('.description-restaurant')
      h5.html(restaurante.name);
      p.html(restaurante.description);
       console.log($('#restaurant-img'));
      //console.log($('#restaurant-img').["0"].name));
    })
});
