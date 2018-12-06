import swig from 'swig-templates';
import fs from 'fs-extra';
import chalk from 'chalk';

const log = console.log;

/**
 * TemplateGenerator
 */
class TemplateGenerator {
  constructor( options ) {
    this.TEMPLATES_DIR = `${__dirname}/blueprints`;
    this._create(options);
  }

  _create( options = {} ) {
    if (options.type === 'scaffold' || options.type === 's') {
      this._createDirectory('./src');
      this._createDirectory('./src/views');
      const folderDirectory = this._createDirectory(`./src/views/${options.name}`);

      const outputVueFile = this._compileFile(options.name);

      // let's create the main files
      const crudFiles = ['index', 'create', 'show', 'edit'];

      for (let i=0; i < crudFiles.length; i++) {
        let directory = `./src/views/${options.name}/${crudFiles[i]}.vue`;
        this._writeFile(directory, outputVueFile);
      }

      // show output at the end
      log(chalk.white('Created: '));
      log(chalk.white(`${folderDirectory} - index.vue`));
      log(chalk.white(`${folderDirectory} - create.vue`));
      log(chalk.white(`${folderDirectory} - show.vue`));
      log(chalk.white(`${folderDirectory} - edit.vue`));
    } else if ((options.type === 'component' || options.type === 'c') && options.directory) {
      const directories = options.directory.split('/');
      console.log(directories);
    }
  }

  _compileFile(name) {
    const template = swig.compileFile(`${this.TEMPLATES_DIR}/single/example.vue`);
    return template({ name: name });
  }

  /**
   * Attempts to write to file based on the folder name, and creates its own directory too
   * @param {string} folderName 
   * @param {string} content 
   */
  _writeFile(directory, content) {
    fs.writeFileSync(directory, content, (err) => console.error(err));
  }

  /**
   * Creates directory if it doesn't exist
   * @param directory
   */
  _createDirectory(directory) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
      log(chalk.green(`Created folder: ${directory}!`));
    }
    return directory;
  }
}

export default TemplateGenerator;
