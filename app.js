const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser')
const Writer = require('./Writer');

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  const data = leitor.Read('./users.csv');
  const processedData = Processor.Process(data);

  const users = new Table(processedData);

  const html = await HtmlParser.Parse(users);

  escritor.Write(Date.now() + ".html", html);

  console.log(html);
}

main();
