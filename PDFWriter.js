const  pdf = require('html-pdf');



class PDFWriter {
  static async WritePDF(filename, html) {
    pdf.create(html, {
      childProcessOptions: {
        env: {
          OPENSSL_CONF: '/dev/null',
        }
      }
    }).toFile(filename, (err, res) => {
      if (err) return console.log(err);
      console.log(res);
    });
  }

}

module.exports = PDFWriter;
