var calcularEdad = function (fechaNacimiento) {
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    var mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    return edad;
};
var fechaNacimiento = "1991-05-15";
var fechaNacimiento2 = "1990-07-22";
var fechaNacimiento3 = "1973-03-20";
console.log("La edad es: ".concat(calcularEdad(fechaNacimiento)));
console.log("La edad es: ".concat(calcularEdad(fechaNacimiento2)));
console.log("La edad es: ".concat(calcularEdad(fechaNacimiento3)));
