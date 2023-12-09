import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type BuildOptions } from './types/config'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}
