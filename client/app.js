function onPageLoad() {
    console.log('Loaded');

    var url = "http://127.0.0.0:5000/get-location";

    $.get(url, function (data, status) {
        if (data) {
            var locations = data.locations;
            var idLocations = document.getElementById('idLocation');

            $('#idLocation').empty();

            for (var i in locations) {
                var option = new Option(locations[i]);

                $('#idLocation').append(option);
            }
        }
    });
}

window.onload = onPageLoad;
