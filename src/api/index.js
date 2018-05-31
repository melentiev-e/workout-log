var data = require('./mock-data')
const timeout = 100;

export default {
    getAllTrainings (cb) {
      setTimeout(() => cb(data), timeout)
    }
  }