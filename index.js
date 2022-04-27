let edad = 16;


if (edad < 17) {
    console.log ("pueden entrar.")

} else if (edad< 14) {
    console.log ("lo siento, eres demasiado joven vuelve a intentarlo más adelante")



} else { (edad <= 14 && edad <=17 ) 
    console.log ("pueden entrar, pero sólo acompañadas de una persona mayor de 18 años")
}


/*Funciones
Refactoriza el código anterior en una única función que se llame gestionarAdmision(). Ejecútala y comprueba el resultado de esta función con las
siguientes edades: 0, 8, 12, 14, 17, 18, 35 y 99.*/

gestionarAdmision ( 0,8,12,14,17,18,35,99 )