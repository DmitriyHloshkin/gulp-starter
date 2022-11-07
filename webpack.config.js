export function webpackConfig(isDev) {
  return  {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? "source-map" : false,
    output: {
      filename: 'app.min.js',
    },
  };
}