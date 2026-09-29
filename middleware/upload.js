const multer = require('multer');

const storage = multer.memoryStorage();
// Limite de tamanho (ex.: 10 MB) – evita abusos em aula
module.exports = multer({ storage, limits: { fileSize: 2 * 1024 * 1024 } });
