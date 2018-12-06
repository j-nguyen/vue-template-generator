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
  name: args[1],
  directory: args[2]
};

if (options.type === 'help') {
  generateHelp();
} else if (options.type && options.name) {
  // instantiate the object I guess.
  new TemplateGenerator(options);
} else {
  log(chalk.white.bold('Invalid command.'));
  generateHelp();
}

/**
 * Generates a help command for us
 */
function generateHelp() {
  // Scaffold Help
  log(chalk.white.bold('Scaffolding: \n\n') + chalk.white.bold('Usage(s):'));
  log('- vgc scaffold <name>');
  log('- vgc s <name>');
  log(chalk.white.bold('Example:') + ' vgc s users');
  log(chalk.white.bold('Description:') + ' Creates an index, show, create, and delete vue file for us');
  // Component Help
  log(chalk.white.bold('\nComponent: \n\n') + chalk.white.bold('Usage(s):'));
  log('- vgc component <name> <directory>');
  log('- vgc c <name> <directory>');
  log(chalk.white.bold('Example:') + ' vgc c test shared/test/poo');
  log(chalk.white.bold('Description:') + ' Creates a single component for us at a directory location');
}