exports.config = {
  bundles: [
    { components: ['progress-bar']},
    { components: ['my-slider'] }
  ],
  buildDir: 'stencil-components/build',
  collections: [ ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
