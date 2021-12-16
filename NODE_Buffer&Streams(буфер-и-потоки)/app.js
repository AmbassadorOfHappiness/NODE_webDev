// https://www.youtube.com/watch?v=1QA-wpRnpG0&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0&index=8

const fs = require('fs');
const zlib = require('zlib')

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt');
compressStream = zlib.createGzip();

/* readStream.on('data', (chunk) => {
  writeStream.write('\n---CHUNK START---\n');
  writeStream.write(chunk);
  writeStream.write('\n---CHUNK END---\n');
  // console.log('--------------------------')
  // console.log(chunk.toString());
}); */

// --------ВМЕСТО ЭТОГО МОЖНО ИСПОЛЬЗОВАТЬ pipe--------//

const handleError = () => {
  console.log(('Error'));
  readStream.destroy();
  writeStream.end('Finished whith error...');
}
readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError);