import type webpack from 'webpack'

export function buildLoaders (): webpack.RuleSetRule[] {
  // Если не на чистом js, то транспилятор не нужен
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader'
    ]
  }

  // Если не используем тайпскрипт - нужен babel-loader
  const tsLoaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  return [
    babelLoader,
    tsLoaders,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}
