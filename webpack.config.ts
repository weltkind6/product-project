import path from 'path'
import type webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })

  return config
}

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
