process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\n' + 'prompt > ');
};

process.stdin.on('data', (data) => {
  const arr = data.toString().trim().split(' ');
  const cmd = arr[0];
  const fileName = arr[1];
  if (cmd === 'cat') {
    cat(fileName, done);
  }
  if (cmd === 'pwd') {
    pwd(done);
  }
  if (cmd === 'ls') {
    ls(done);
  }
});
