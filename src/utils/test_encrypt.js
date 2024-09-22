const {
    hashPassword,
    encryptSensibleData,
    comparePassword
} = require('./encrypt');

// Pruebas de funciones
password = 'MiPasswordSegura2024';

hashPassword(password).then(hashedPassword => {
    console.log("Hash de la contraseña: " + hashedPassword);

    comparePassword(password, hashedPassword).then(isMatch => {
        console.log("Contraseña válida:", isMatch);
    });
}).catch(err => {
    console.error("Error hashing password: ", err);
});

const Data = encryptSensibleData(password);
console.log("Data encrypted: " + Data);