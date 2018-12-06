#!/usr/bin/env node

import swig from 'swig-templates';
import swigFilters from './config/swig-filters';
import chalk from 'chalk';
import TemplateGenerator from './TemplateGenerator';

// set up const log
const log = console.log;

// set up a list of filters
swigFilters(swig);

// Get list of arguments
const args = process.argv.slice(2);

// set it up as an object
const options = {
  type: args[0],
  name: args[1]
};

if (options.type === 'help') {
  log('Scaffolding: ');
  log(chalk.bold('Usage:') + ' vgc scaffold <name>');
  log(chalk.bold('Description:') + ' Creates an index, show, create, and delete vue file for us');
} else if (options.type && options.name) {
  // instantiate the object i guess
  new TemplateGenerator(options);
} else {
  log(chalk.bold('Invalid command.'));
  log(chalk.bold('Usage:') + ' vgc scaffold <name>');
}