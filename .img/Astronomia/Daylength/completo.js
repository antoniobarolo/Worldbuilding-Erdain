var rad = Math.PI / 180
var hour_angle, day_length

mostrar()

function mostrar(){
    var ano = $("#ano").val()
    var horas = $("#horas").val()

    var lat = $("#lat").val()
    var dia = $("#dia").val()
    var tilt = $("#tilt").val()
    $(".resp").text(calcular(ano, horas, lat, dia, tilt))
}

function imprimir(){
    $(".imprimir").text("")
    var ano = $("#ano").val()
    var horas = $("#horas").val()

    var lat = $("#lat").val()
    var tilt = $("#tilt").val()
    for(var dia = 0; dia < ano; dia++){
       //$(".imprimir").append("<br/>"+dia+"_____"+calcular(ano, horas, lat, dia, tilt))
       $(".imprimir").append("<br/>"+calcular(ano, horas, lat, dia, tilt))
    }
}

function calcular(ano, horas, lat, dia, tilt) {
    var latitude = lat * rad
    var day_number = dia
    var axial_tilt = tilt * rad
    var days_in_year = ano
    var hours_in_day = horas

    hour_angle = Math.acos(-Math.tan(latitude) * Math.tan(Math.asin(Math.sin(rad*360 * day_number / days_in_year) * Math.sin(axial_tilt))))/rad

    day_length = 2 * hour_angle * hours_in_day / 360

    return day_length
}
