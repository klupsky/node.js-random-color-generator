// import chalk from npm
import chalk from 'chalk';
// import randomColor from npm
import randomColor from 'randomcolor';

const color = randomColor();

// create the array-construct of block including random color hex code
const colorArray = [
  `   ###############################
   ###############################
   ###############################
   #####                    ######
   #####                    ######
   #####      ${color}       ######
   #####                    ######
   #####                    ######
   ###############################
   ###############################
   ###############################`,
];

if (process.argv.length < 3) {
  console.log(chalk.hex(color).bold(colorArray));
} else if (process.argv[2] === 'ask') {
  console.log(`What color, what luminosity and hue should i console log?`);
} else {
  console.log(
    chalk.hex(
      randomColor({
        luminosity: process.argv[3],
        hue: process.argv[2],
      }),
    )(colorArray),
  );
}
