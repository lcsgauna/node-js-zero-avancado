const os = require('node:os');

console.log({cpus:os.cpus(), memorie: os.freemem(), dirHome: os.homedir(), OS: os.type()});