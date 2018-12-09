import swig from 'swig-templates';
import fs from 'fs-extra';
import chalk from 'chalk';

const log = console.log;

/**
 * TemplateGenerator
 */
class TemplateGenerator {
  constructor(type, name, options) {
    this.TEMPLATES_DIR = `${__dirname}/blueprints`;
    this._create(type, name, options);
  }

  _create(type, name, options) {
    if (type === 'scaffold' || type === 's') {
      this._createDirectory('./src');
      this._createDirectory('./src/views');
      const folderDirectory = this._createDirectory(`./src/views/${name}`);

      // let's create the main files
      let crudFiles = ['index', 'create', 'show', 'edit'];

      // check
      if (options[0].indexOf('--only') !== -1) {
        // TODO: Find a better way to do this
        let allowedFiles = options[0].split('=')[1].split(',');
        crudFiles = crudFiles.filter((crud) => allowedFiles.indexOf(crud) !== -1);
      }

      log(chalk.white('Created:'));
      for (let i=0; i < crudFiles.length; i++) {
        let directory = `./src/views/${name}/${crudFiles[i]}.vue`;
        let fileName = this._upperCaseFirstLetter(name) + this._upperCaseFirstLetter(crudFiles[i]);
        let outputVueFile = this._compileFile(fileName);

        this._writeFile(directory, outputVueFile);

        log(chalk.white(`${folderDirectory}/${crudFiles[i]}.vue`));
      }

    } else if ((type === 'component' || type === 'c') && options[0]) {
      let directories = options[0].directory.split('/');
      
      if (directories.length === 0) {
        this._createDirectory(`./${options.directory}`);
      } else {
        let currentDirectory = '.';
        for (let i=0; i < directories.length; i++) {
          currentDirectory += '/' + directories[i];
          this._createDirectory(currentDirectory);
        }
      }

      const output = this._compileFile(options.name);
      this._writeFile(`${options.directory}/${options.name}.vue`, output);

      log(chalk.white.bold('Created:'));
      log(chalk.white(`./${options.directory}/${options.name}.vue`));
    }
  }

  /**
   * Compiles file content into swig template engine
   * @param {string} name 
   */
  _compileFile(name) {
    const template = swig.compileFile(`${this.TEMPLATES_DIR}/single/example.vue`);
    return template({ name: name });
  }

  /**
   * Attempts to write to file based on the folder name, and creates its own directory too
   * @param {string} directory
   * @param {string} content 
   */
  _writeFile(directory, content) {
    fs.writeFileSync(directory, content, (err) => console.error(err));
  }

  /**
   * Creates directory if it doesn't exist
   * @param {string} directory
   */
  _createDirectory(directory) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
      log(chalk.green(`Created folder: ${directory}`));
    }
    return directory;
  }

  /**
   * Uppercases first letter
   * @param {string} str 
   */
  _upperCaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
  }
}

export default TemplateGenerator;
