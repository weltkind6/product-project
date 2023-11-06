import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    // Если не на чистом js, то транспилятор не нужен

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        tsLoaders,
        cssLoader,
    ]
}
