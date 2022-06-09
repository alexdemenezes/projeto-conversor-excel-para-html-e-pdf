const Reader = require('./Reader');
const Processor = require('./Processor');

const leitor = new Reader();

const data = leitor.Read('./users.csv');

Processor.Process(data);
