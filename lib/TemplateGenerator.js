import swig from 'swig-templates';
import fs from 'fs-extra';
import chalk from 'chalk';

/**
 * TemplateGenerator
 */
class TemplateGenerator {
  constructor( options ) {
    this.TEMPLATES_DIR = `${__dirname}/blueprints`;
    this._create(options);
  }

  _create( options = {} ) {
    const outputVueFile = this._compileFile(options.name);
    this._writeFile(options.name, outputVueFile);
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
  _writeFile(folderName, content) {
    this._createDirectory('./src');
    this._createDirectory('./src/views');
    const folderDirectory = this._createDirectory(`./src/views/${folderName}`);

    fs.writeFileSync(`./src/views/${folderName}/index.vue`, content, (err) => console.error(err));    

    chalk.white('Scaffolded: ');
    chalk.white(`${folderDirectory} - index.vue`);
  }

  /**
   * Creates directory if it doesn't exist
   * @param directory
   */
  _createDirectory(directory) {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
      chalk.green(`Created folder: ${directory}!`);
    }
    return directory;
  }
}

export default TemplateGenerator;
