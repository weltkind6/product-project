import * as webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type BuildOptions } from './types/config'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(isDev)
        }),
        new ReactRefreshWebpackPlugin(),
    ]

    if(isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }

    return plugins
}
