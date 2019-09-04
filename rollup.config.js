// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output:
        {
            name: 'reusable',
            file: 'dist/index.js',
            format: 'umd',
            sourcemap: 'inline'
        },
    external: ['react'],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};
