const path = require('node:path');

console.log(path.sep)

const filePath = path.join('content', 'subfolder','test.txt');
console.log(filePath)

const base = path.basename('/api/trendings/password.txt')
console.log(base)

const filename = path.basename('/tmp/midu-secret-files/password.txt')
console.log(filename)

const extension = path.extname('coursesforme.jpg')
console.log(extension)