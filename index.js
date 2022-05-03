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

console.log(chalk.hex(color).bold(row));
console.log(
  randomColor({
    luminosity: 'light',
    hue: 'blue',
  }),
);

console.log(
  chalk.hex(
    randomColor({
      luminosity: process.argv[3],
      hue: process.argv[2],
    }),
  )('string'),
);
