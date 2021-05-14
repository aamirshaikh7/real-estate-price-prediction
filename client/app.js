function getBHKValue() {
    var bhk = document.getElementsByName("bhk");
    for(var i in bhk) {
        if(bhk[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function getGymValue() {
    var gym = document.getElementsByName("gym");
    for(var i in gym) {
        if(gym[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function getLiftValue() {
    var lift = document.getElementsByName("lift");
    for(var i in lift) {
        if(lift[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function getParkingValue() {
    var parking = document.getElementsByName("parking");
    for(var i in parking) {
        if(parking[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function getSecurityValue() {
    var security = document.getElementsByName("security");
    for(var i in security) {
        if(security[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function getPlaygroundValue() {
    var playground = document.getElementsByName("playground");
    for(var i in playground) {
        if(playground[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function getSwimmingPoolValue() {
    var swimming_pool = document.getElementsByName("swimming-pool");
    for(var i in swimming_pool) {
        if(swimming_pool[i].checked) {
            return parseInt(i)+1;
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    var sqft = document.getElementById("idArea");

    var bhk = getBHKValue();
    var gym = getGymValue();
    var lift = getLiftValue();
    var parking = getParkingValue();
    var security = getSecurityValue();
    var playground = getPlaygroundValue();
    var swimming_pool = getSwimmingPoolValue();

    var location = document.getElementById("idLocation");
    var estPrice = document.getElementById("idEstimatedPrice");
  
    var url = "http://127.0.0.1:5000/predict-price"; //Use this if you are NOT using nginx which is first 7 tutorials
    // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  
    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        gym: gym,
        lift: lift,
        parking: parking,
        security: security,
        playground: playground,
        swimming_pool: swimming_pool,
        location: location.value
    },function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + "</h2>";
        console.log(status);
    });
}

function onPageLoad() {
    console.log('Loaded');

    var url = "http://127.0.0.1:5000/get-location";

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
