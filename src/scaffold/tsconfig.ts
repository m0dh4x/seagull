/** @module Scaffold */
export const TsConfig = {
  compilerOptions: {
    declaration: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    jsx: 'react',
    lib: ['es5', 'es6', 'es7', 'dom', 'dom.iterable'],
    module: 'commonjs',
    outDir: '.seagull/dist',
    removeComments: true,
    rootDirs: ['backend', 'frontend', 'lib'],
    skipLibCheck: true,
    sourceMap: true,
    strict: true,
    target: 'es5',
  },
  typeRoots: ['node_modules/@types'],
  types: ['node'],
}