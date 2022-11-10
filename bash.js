process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === 'pwd') {
    process.stdout.write(pwd());
  }
  if (cmd === 'ls') {
    ls();
  }
});
