module.exports = {
    // entry: './main.js',
    // entry: './codeEditor.js',
    // entry: './jsadvanced/parse.js',
    entry: './jsadvanced/parse_main.js',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [["@babel/plugin-transform-react-jsx",{pragma:"createElement"}]]
                    }
                }
            }
        ]
    },
    mode:"development"
}