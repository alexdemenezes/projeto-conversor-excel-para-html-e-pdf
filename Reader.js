const fs = require('fs');

class Reader{

  Read(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      return data;

    } catch (e) {
      return undefined;
    }
  }

}


module.exports = Reader;
