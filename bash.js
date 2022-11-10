process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdin.on('data', (data) => {
  const arr = data.toString().trim().split(' ');
  const cmd = arr[0];
  const fileName = arr[1];
  if (cmd === 'cat') {
    cat(fileName);
  }
  if (cmd === 'pwd') {
    process.stdout.write(pwd());
  }
  if (cmd === 'ls') {
    ls();
  }
});

const done = (output) => {

};