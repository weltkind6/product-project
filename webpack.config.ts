import path  from "path";
import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"

const config: webpack.Configuration ={
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new webpack.ProgressPlugin(),
    ],
}

export default config;


// Код импортирует необходимые модули: path, HtmlWebpackPlugin и webpack.
//
//     Код экспортирует объект конфигурации, который определяет настройки для сборки с помощью webpack.
//
//     Свойство mode установлено на "development", что указывает на то, что сборка предназначена для разработки.
//
//     Свойство entry указывает точку входа для сборки с помощью webpack.
//     Оно определяет путь к файлу 'index.ts' в директории 'src' с помощью метода path.resolve().
//
//     Свойство module определяет правила для обработки различных типов файлов.
//     В данном случае определено одно правило для файлов с расширением '.tsx' или '.ts'.
//     Используется загрузчик 'ts-loader' для обработки этих файлов, исключая директорию 'node_modules'.
//
//     Свойство output определяет конфигурацию вывода для сборки с помощью webpack.
//     Свойство 'filename' определяет имя выходного файла в формате '[name].[contenthash].js'.
//     Свойство 'path' указывает директорию вывода как директорию 'build', разрешенную с помощью метода path.resolve().
//     Свойство 'clean' установлено в значение 'true', что указывает на необходимость очистки директории 'build' перед каждой сборкой.
//
//     Свойство resolve определяет, как webpack разрешает запросы модулей.
//     Свойство 'extensions' определяет расширения файлов, которые будут автоматически разрешаться при импорте модулей.
//
//     Свойство plugins является массивом плагинов, которые будут использоваться во время сборки с помощью webpack.
//     В данном случае определены два плагина: HtmlWebpackPlugin и webpack.ProgressPlugin().
//     HtmlWebpackPlugin генерирует HTML-файл на основе указанного шаблона, а webpack.ProgressPlugin() отображает
//     индикатор прогресса во время процесса сборки.
