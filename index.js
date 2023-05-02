import chalk from 'chalk';
import randomColor from 'randomcolor';

// The first value the user inserts after typing in node index.js into the console is going to be assigned to hue.
const hue = process.argv[2];

// The second value the user inserts after typing in node index.js into the console is going to be assigned to luminosity.
const luminosity = process.argv[3];

const actualRandomColor = randomColor({
  hue: hue,
  luminosity: luminosity,
});

console.log(chalk.hex(actualRandomColor)('###############################'));
console.log(chalk.hex(actualRandomColor)('###############################'));
console.log(chalk.hex(actualRandomColor)('###############################'));
console.log(chalk.hex(actualRandomColor)(`#####                     #####`));
console.log(
  chalk.hex(actualRandomColor)(`#####       ${actualRandomColor}       #####`),
);
console.log(chalk.hex(actualRandomColor)(`#####                     #####`));
console.log(chalk.hex(actualRandomColor)('###############################'));
console.log(chalk.hex(actualRandomColor)('###############################'));
console.log(chalk.hex(actualRandomColor)('###############################'));
