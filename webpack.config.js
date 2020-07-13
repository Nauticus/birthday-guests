const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    target: "node",
    context: __dirname,
    entry: path.resolve(__dirname, "src/index.ts"),
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/")
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env", "@babel/preset-typescript"]
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [new CleanWebpackPlugin()],
    stats: {
        // Ignore warnings due to yarg's dynamic module loading
        warningsFilter: [/node_modules\/yargs/]
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ? "warning" : false
    }
};
