const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
HtmlParser = require('./HtmlParser')
const leitor = new Reader();

async function main() {
  const data = leitor.Read('./users.csv');
  const processedData = Processor.Process(data);

  const users = new Table(processedData);

  const html = await HtmlParser.Parse(users);

  console.log(html);
}

main();
