const { DIRECTORIES } = require('./constants');

const SRC = { src: DIRECTORIES.SRC };
const PUBLIC = { public: DIRECTORIES.PUBLIC };
const IMAGES = { images: DIRECTORIES.IMAGES };
const STATICS = { statics: DIRECTORIES.STATICS };

module.exports = {
  SRC,
  PUBLIC,
  IMAGES,
  STATICS,
};
