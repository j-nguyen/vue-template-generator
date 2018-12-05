#!/usr/bin/env node

import swig from 'swig-templates';
import swigFilters from './config/swig-filters';
import TemplateGenerator from './TemplateGenerator';

swigFilters(swig);

const args = process.argv.slice(2);
const options = {
  name: args[0]
};

// instantiate the object i guess
new TemplateGenerator(options);