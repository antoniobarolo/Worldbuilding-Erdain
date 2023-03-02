var rad = Math.PI / 180
var hour_angle, day_length


function ecliptic_longitude(day_number, days_in_year) {
    return 360 * day_number / days_in_year
}

function declination(ecliptic_longitude, axial_tilt) {
    return Math.asin(Math.sin(ecliptic_longitude * rad) * Math.sin(axial_tilt * rad)) / rad
}

function hour_angle(latitude, declination) {
    return Math.acos(-Math.tan(latitude * rad) * Math.tan(declination * rad)) / rad
}

function day_length(hour_angle, hours_in_day) {
    return 2 * hour_angle * hours_in_day / 360
}

function calcular(lat, dia, tilt) {
    return day_length(hour_angle(lat, declination(ecliptic_longitude(dia, 365), tilt)),24)
}

function mostrar(){
    var lat = $("#lat").val()
    var dia = $("#dia").val()
    var tilt = $("#tilt").val()
    $(".resp").text(calcular(lat, dia, tilt))
}

function imprimir(){
    $("p").text("")
    var lat = $("#lat").val()
    var tilt = $("#tilt").val()
    for(var dia = 0; dia < 360; dia++){
        $("p").append("\n"+calcular(lat, dia, tilt))
    }
}
