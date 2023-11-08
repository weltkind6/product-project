import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options

   return {
       mode,
       entry: paths.entry,
       module: {
           rules: buildLoaders(),
       },
       output: {
           filename: "[name].[contenthash].js",
           path: paths.build,
           clean: true
       },
       devtool: isDev ? 'inline-source-map' : undefined,
       resolve: buildResolves(options),
       plugins: buildPlugins(options),
       devServer: isDev ? buildDevServer(options) : undefined
   }
}
