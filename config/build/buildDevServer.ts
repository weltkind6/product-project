import { type Configuration as DevServConfiguration } from 'webpack-dev-server'

import { type BuildOptions } from './types/config'

export function buildDevServer (options: BuildOptions): DevServConfiguration {
  const { port } = options

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
