import _ from 'lodash';

export default ( swig ) => {
  /* ===============
   Swig filters
   =============== */

  swig.setFilter('camelCase', (input) => {
    return _.camelCase(input);
  });

  swig.setFilter('pascalCase', (input) => {
    return input.match(/[a-z]+/gi)
      .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
      .join('')
  });
};