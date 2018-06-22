const Stream = require("./stream");

/**
 * A Raven stream for Pino.
 *
 * @type {Stream}
 */
exports.Stream = Stream;

/**
 * Create a new stream.
 *
 * @param {StreamOptions} [options={}] The stream options.
 * @return {Stream} The stream.
 */
module.exports = (options = {}) => new Stream(options);
