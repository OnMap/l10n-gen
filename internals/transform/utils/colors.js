// More here -> https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const COLORS = {
  UNDERSCORE: '\x1b[4m',

  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  CYAN: '\x1b[36m',
  YELLOW: '\x1b[33m',
  MAGENTA: '\x1b[35m',
};

Object.keys(COLORS).forEach((key) => {
  COLORS[key] = `${COLORS[key]}%s\x1b[0m`;
});

module.exports = COLORS;
