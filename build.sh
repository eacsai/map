cd build
em++ ../cpp/hello.cpp -s WASM=1 -o hello.js
mv hello.js ../web/gen/
mv hello.wasm ../web/gen/