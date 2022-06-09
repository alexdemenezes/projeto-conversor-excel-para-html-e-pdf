const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const leitor = new Reader();

function main() {
  const data = leitor.Read('./users.csv');
  const processedData = Processor.Process(data);

  const users = new Table(processedData);

  console.log(users.RowCount)
  console.log(users.ColumnCount);
}

main();
