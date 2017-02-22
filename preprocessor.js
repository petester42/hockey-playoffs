const tsc = require('typescript');
const tsConfig = require('./__tests__/tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
        var transpiled = tsc.transpileModule(src, {
            compilerOptions: tsConfig.compilerOptions,
            fileName: path
        });

        return transpiled.outputText;
    }
    return src;
  },
};