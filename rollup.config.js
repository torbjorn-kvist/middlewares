const external = ['querystring', 'graphql', 'fs', 'path'];

export default ['body-parser', 'static', 'graphql'].map((name) => ({
  input: `./${name}/${name}.es.js`,
  output: {
    format: 'cjs',
    file: `./${name}/cjs/${name}.cjs.js`,
    strict: false
  },
  external
}));
