const { diffBetweenDates, formatDateToDDMMYYYY, addDaysToDate, isValidDate, getDayOfWeek } = require('./date');

// Pruebas de funciones

// Diferencia de días entre dos fechas
console.log("Diferencia de días:", diffBetweenDates('15-09-2024', '25-09-2024')); // 10 días

// Formatear fecha actual a DD-MM-YYYY
console.log("Formato DD-MM-YYYY:", formatDateToDDMMYYYY(new Date())); // Fecha actual en DD-MM-YYYY

// Agregar días a una fecha
console.log("Fecha más 5 días:", addDaysToDate('15-09-2024', 5)); // 20-09-2024

// Validar si una fecha es válida
console.log("Fecha válida (15-09-2024):", isValidDate('15-09-2024')); // true
console.log("Fecha válida (31-13-2024):", isValidDate('31-13-2024')); // false

// Obtener el día de la semana
console.log("Día de la semana (15-09-2024):", getDayOfWeek('15-09-2024')); // Domingo