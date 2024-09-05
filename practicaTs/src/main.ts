const calcularEdad = (fechaNacimiento: string): number => {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
    
    if(mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    return edad;
};

const fechaNacimiento = "1991-05-15";
const fechaNacimiento2 = "1990-07-22";
const fechaNacimiento3 = "1973-03-20";

console.log(`La edad es: ${calcularEdad(fechaNacimiento)}`);
console.log(`La edad es: ${calcularEdad(fechaNacimiento2)}`);
console.log(`La edad es: ${calcularEdad(fechaNacimiento3)}`);


