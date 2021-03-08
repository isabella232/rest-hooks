import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const dependencies = Object.keys(pkg.dependencies)
  .concat(Object.keys(pkg.peerDependencies))
  .filter(dep => !['@rest-hooks/normalizr', '@babel/runtime'].includes(dep));

const extensions = ['.js', '.ts', '.tsx', '.mjs', '.json', '.node'];
process.env.NODE_ENV = 'production';
process.env.BROWSERSLIST_ENV = 'node10';
process.env.RESOLVER_ALIAS = '{"@rest-hooks/test":"./src"}';

function isExternal(id) {
  return dependencies.some(dep => dep === id || id.startsWith(dep));
}

export default [
  // test utils commonjs build
  {
    input: 'src/index.ts',
    external: id => id === '..' || isExternal(id),
    output: [{ file: 'dist/index.cjs', format: 'cjs' }],
    plugins: [
      babel({
        exclude: ['node_modules/**', '**/__tests__/**', '**/*.d.ts'],
        rootMode: 'upward',
        extensions,
        runtimeHelpers: true,
      }),
      resolve({ extensions }),
      commonjs({ extensions }),
    ],
  },
];
