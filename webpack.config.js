const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    target: "node",
    entry: path.resolve(__dirname, "src/index.js"),
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/")
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-flow']
                }
            }
        ]
    },
    resolve: {
        extensions: [".js"],
        alias: {
            app: path.resolve(__dirname, "src/")
        }
    },
    plugins: [new CleanWebpackPlugin()],
    performance: {
        hints: process.env.NODE_ENV === "production" ? "warning" : false
    }
};
