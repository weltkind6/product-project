import {BuildOptions} from "./types/config";
import {Configuration as DevServConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServConfiguration {
    const {port} = options

    return {
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true,
    }
}
