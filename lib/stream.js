const isError = require("lodash.iserror");
const isPlainObject = require("lodash.isplainobject");
const omit = require("lodash.omit");
const Raven = require("raven");
const stream = require("stream");

/**
 * @typedef {Object} StreamOptions
 * @property {Raven.Client} client The Raven client.
 * @property {Array<String>} errorFieldNames The error field names.
 */

/**
 * A Raven stream for Pino.
 *
 * @extends {stream.Writable}
 * @param {StreamOptions} [options={}] The stream options.
 * @param {Object} [options.client=Raven] The Raven client.
 * @param {Array<String>} [options.errorFieldNames=["err", "error"]] The error field names.
 */
class Stream extends stream.Writable {
  constructor(options = {}) {
    super();

    this.client = options.client || Raven;
    this.errorFieldNames = options.errorFieldNames || ["err", "error"];
    this[Symbol.for("needsMetadata")] = true;
  }

  _write(chunk, encoding, callback) {
    const msg = this.lastMsg;
    const obj = this.lastObj || {};
    const error = this._getError(obj);
    const extra = this._getExtraFields(obj);
    const level = this._getLevelLabel(this.lastLevel);
    const tags = obj.tags || [];

    const context = {
      extra,
      level,
      tags,
    };

    if (error) {
      this.client.captureException(error, context);
    } else {
      this.client.captureMessage(msg, context);
    }

    callback();
  }

  _getError(obj) {
    if (isError(obj)) {
      return obj;
    }

    for (const fieldName of this.errorFieldNames) {
      const field = obj[fieldName];

      if (isError(field)) {
        return field;
      }
    }

    return null;
  }

  _getLevelLabel(level) {
    switch (level) {
      case 10:
      case 20:
        return "debug";

      case 30:
        return "info";

      case 40:
        return "warning";

      case 50:
        return "error";

      case 60:
        return "fatal";

      default:
        return null;
    }
  }

  _getExtraFields(obj) {
    if (isPlainObject(obj)) {
      return omit(obj, Object.assign({}, this.errorFieldNames, ["tags"]));
    }

    return {};
  }
}

module.exports = Stream;
