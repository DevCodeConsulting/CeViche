import fs from 'fs';
import path from 'path';

// babel-node ./build/createEmptyTestFiles.js ./src

const target = process.argv[2];

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    var filePath = path.join(currentDirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}
function directoryExists(directoryPath) {
  try {
    return fs.statSync(directoryPath).isDirectory();
  }
  catch (err) {
    return false;
  }
}

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  }
  catch (err) {
    return false;
  }
}

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (!directoryExists(dirname)) {
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
  }
}

function createTestFile(filePath) {
  // /aaa/sss/ddd/fff/src/components/ArrayField.js
  if (filePath.endsWith('.js') && !filePath.endsWith('main.js')) {
    const testFilePath = filePath.replace('/src/', '/test/').replace('.js', '.spec.js');
    console.log(testFilePath);
    ensureDirectoryExistence(testFilePath);
    if (!fileExists(testFilePath)) {
      fs.closeSync(fs.openSync(testFilePath, 'w'));
      // /aaa/sss/ddd/fff/test/components/ArrayField.spec.js
      const fileName = testFilePath.split('/').pop().split('.')[0];
      const relPrefix = '../'.repeat(testFilePath.substring(testFilePath.indexOf('/test/')).split('/').length - 2);
      const relPath = relPrefix + filePath.substring(filePath.indexOf('/src/') + 1);

      let content = '';
      content = content + `import React from 'react';\nimport {mount, shallow} from 'enzyme';\n`;
      content = content + `import ${fileName} from '${relPath}';\n`;
      content = content + `
describe.skip('', function () {
describe('', function () {

  let wrapper, func=sinon.spy();

  before(function () {
    const _props = {
        setting: {},
        func: func            
    };

    wrapper = mount(<${fileName} {..._props}/>);
  });
  
  after(function () {
      wrapper.unmount();
  });
  

  it('Should render ', function () {
      
  });

  it('Should ', function () {
      
  });         
    
});
  
});
`;
      fs.writeFile(testFilePath, content, function (err) {
        if (err) return console.log(err);
      });
    }

  }
}
walkSync(path.resolve(target), createTestFile);
