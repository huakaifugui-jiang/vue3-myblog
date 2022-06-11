/*
 * @Author: wlj
 * @Date: 2022-05-24 09:18:01
 * @LastEditors: wlj
 * @LastEditTime: 2022-06-02 15:56:28
 * @Description:
 */
const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const path = require("path");
const { merge } = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    //用来设置引用模块
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true,
              }),
            ],
          }),
          compilerOptions: {
            module: "es2015",
          },
        });
        return options;
      });
  },
});
