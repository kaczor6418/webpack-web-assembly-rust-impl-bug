>This is repository with minimal code example to reproduce `Can not use web-assembly rust impl` bug

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
