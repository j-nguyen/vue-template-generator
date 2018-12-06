#!/usr/bin/env node

import swig from 'swig-templates';
import swigFilters from './config/swig-filters';
import TemplateGenerator from './TemplateGenerator';

swigFilters(swig);

const args = process.argv.slice(2);

const options = {
  name: args[0]
};

console.log(options);

// if (options.name === 'help') {
//   console.log('Usage: vgc <name> here');
// } else {
//   // instantiate the object i guess
//   new TemplateGenerator(options);
// }