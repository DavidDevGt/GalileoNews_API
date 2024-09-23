const bcrypt = require('bcryptjs');
const saltRounds = 12;

async function hashPassword(password) {
    return bcrypt.hash(password, saltRounds);
}

function encryptSensibleData(data) {
    const dataEncrypted = bcrypt.hashSync(data, saltRounds);
    return dataEncrypted;
}

async function comparePassword(password, hashedPassword) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}

module.exports = {
    hashPassword,
    encryptSensibleData,
    comparePassword
}