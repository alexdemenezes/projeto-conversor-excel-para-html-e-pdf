const fs = require('fs');

class Writer {
  constructor() {
    this.writer = fs.writeFileSync
  }

  Write(fileName, data) {
    try {
      this.writer(fileName, data);
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = Writer;
