import * as webpack from 'webpack'

import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { type BuildOptions } from './types/config'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders()
        },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        performance: {
            maxEntrypointSize: 500000,
            maxAssetSize: 300000
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        resolve: buildResolves(options),
        plugins: buildPlugins(options)
    }
}
