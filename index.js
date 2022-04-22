const fs = require('fs');

const text = fs.readFileSync('poem.txt', 'utf-8');

export default text
