export function buildCssLoader() {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }
}

