// import chalk from npm
import chalk from 'chalk';
// import randomColor from npm
import randomColor from 'randomcolor';

// create a random color
const color = '#' + Math.floor(Math.random() * 16777216).toString(16);

// create the array-construct of block including random color hex code
const row = [
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
   ###############################
  `,
];

// if terminal input is node index.js, console.log in random color

if (process.argv.length < 3) {
  console.log(chalk.hex(color));

  // else if there is input at [2] or/and [3], console log hue[2] and/or luminosity[2]
} else {
  console.log(
    chalk.hex(
      randomColor({
        luminosity: process.argv[3],
        hue: process.argv[2],
      }),
    )(row),
  );
}
