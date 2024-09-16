// Función para obtener la diferencia en días entre dos fechas
function diffBetweenDates(date1, date2) {
    const [day1, month1, year1] = date1.split('-');
    const [day2, month2, year2] = date2.split('-');
    
    const d1 = new Date(year1, month1 - 1, day1);
    const d2 = new Date(year2, month2 - 1, day2);
    
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

// Función para formatear una fecha a DD-MM-YYYY
function formatDateToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
}

// Función para agregar días a una fecha
function addDaysToDate(date, days) {
    const [day, month, year] = date.split('-');
    const resultDate = new Date(year, month - 1, day);
    resultDate.setDate(resultDate.getDate() + days);
    
    return formatDateToDDMMYYYY(resultDate);
}

// Función para validar si una fecha es válida
function isValidDate(dateString) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(dateString)) return false;
    
    const [day, month, year] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    
    return date.getFullYear() === parseInt(year) &&
           date.getMonth() === (parseInt(month) - 1) &&
           date.getDate() === parseInt(day);
}

// Función para obtener el día de la semana
function getDayOfWeek(date) {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const [day, month, year] = date.split('-');
    const resultDate = new Date(year, month - 1, day);
    
    return daysOfWeek[resultDate.getDay()];
}

module.exports = {
    diffBetweenDates,
    formatDateToDDMMYYYY,
    addDaysToDate,
    isValidDate,
    getDayOfWeek
};