import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = '#' + Math.floor(Math.random() * 16777216).toString(16);

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

if (process.argv.length < 3) {
  console.log(chalk.hex(color).bold(row));
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
