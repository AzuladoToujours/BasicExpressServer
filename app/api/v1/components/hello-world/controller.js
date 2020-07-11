const httpStatus = require('http-status');
const util = require('./hello');
require('dotenv').config();

const get = async (req, res) => {
  try {
    const ans = util.sayHello();

    if (!ans) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found' });
    }
    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const testing = async (req, res) => res.status(200).send(`Hello from ${process.env.HOST}`);

module.exports = {
  get,
  testing,
};
