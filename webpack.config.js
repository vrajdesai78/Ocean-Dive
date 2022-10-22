const path = require("path");

module.exports = {
    mode: "production",
    devServer: {
        host: "localhost",
        port: 8000,
        static: {
            directory: path.resolve(__dirname, "./"),
        },
    },
    entry: "./src/index.js",
    output: {
        publicPath: "/dist/",
        filename: "./bundle.js",
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|png|svg|ico)$/,
                use: ["file-loader"],
            },
        ],
    },
};
