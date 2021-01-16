>This is repository with minimal code example needed to reproduce `Can not use web-assembly rust impl` bug. I created a new repositroy in which I am showing how to set up WebAssembly-Rust procjet you can find it here: **[web-assembly-rust-typescript-template](https://github.com/kaczor6418/web-assembly-rust-typescript-template)**

# Repro steps

## To check that this doesnt work for rust impl:

1. Run follwoing commends in you terminal
```bash
git clone https://github.com/kaczor6418/webpack-web-assembly-rust-impl-bug.git
cd webpack-web-assembly-rust-impl-bug
npm install
npm run serve
```
2. make sure you are on **master** branch
3. go under this url: http://localhost:8080/
4. click `f12` button on your keyboard -> you should se error in console

## To check that this work for simple rust function:

1. Run follwoing commends in you terminal
```bash
git clone https://github.com/kaczor6418/webpack-web-assembly-rust-impl-bug.git
cd webpack-web-assembly-rust-impl-bug
npm install
git checkout example-without-error
npm run serve
```
2. make sure you are on **example-without-error** branch
3. go under this url: http://localhost:8080/
4. click `f12` button on your keyboard -> you should see `'a'` printed in console

# Fix
>Whole solution with code example you can find on branch **`sync-web-assebmly-and-bootstrap-file`**

As ***sokra*** mentioned in his answer under [issue](https://github.com/webpack/webpack/issues/11347) which I created. I should use `experiments.syncWebAssembly` instead of `experiments.asyncWebAssembly`. If I use this `experiments.syncWebAssembly` I have to add additional file which will asynchronously load `index.ts` file.

***`webpack.config.js`***
```javascript
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/bootstrap.ts', // !! <- change path to bootstrap.ts
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    experiments: {
        syncWebAssembly: true // !! <- use syncWebAssembly instead of asyncWebAssembly
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),
    ],
};
```
***`bootstrap.ts`***
```typescript
import('./index').catch(e => console.error('Error importing `index.js`:', e))
```
