#!/usr/bin/env node

import swig from 'swig-templates';
import chalk from 'chalk';
import swigFilters from './config/swig-filters';
import TemplateGenerator from './TemplateGenerator';

// set up const log
const log = console.log;

// set up a list of filters
swigFilters(swig);

// Get list of arguments
const args = process.argv.slice(2);

// set it up as an object
const command = {
  type: args[0],
  name: args[1],
  options: args.slice(2),
};

// Check for type of command presented
if (command.type === 'help') {
  generateHelp();
} else if (command.type && command.name) {
  // instantiate the object I guess.
  new TemplateGenerator(command.type, command.name, command.options);
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
  log('- vgc scaffold <name> [--except=index,show,update]');
  log('- vgc s <name> [--except=index,show,update]');
  log(chalk.white.bold('Example:') + ' vgc s users');
  log(chalk.white.bold('Description:') + ' Creates an index, show, create, and delete vue file for us');
  // Component Help
  log(chalk.white.bold('\nComponent: \n\n') + chalk.white.bold('Usage(s):'));
  log('- vgc component <name> <directory>');
  log('- vgc c <name> <directory>');
  log(chalk.white.bold('Example:') + ' vgc c test shared/test/poo');
  log(chalk.white.bold('Description:') + ' Creates a single component for us at a directory location');
}