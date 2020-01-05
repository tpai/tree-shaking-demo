import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: `dist/rollup.bundle.js`,
  },
  treeshake: false,
  plugins: [
    babel(),
    terser(),
  ]
}
