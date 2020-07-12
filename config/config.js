/**
 * Server configuration
 */
const port = process.env.DEV ? process.env.PORT : 3000;
const morganMode = process.env.DEV ? 'dev' : 'tiny';

console.log(port);

module.exports = {
  port,
  morganMode,
};
