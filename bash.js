process.stdout.write('prompt > ');

const pwd = require('./pwd');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === 'pwd') {
    process.stdout.write(pwd());
  }
});
