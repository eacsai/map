rm -rf build
mkdir build
cd build
em++ ../cpp/hello.cpp -g -s WASM=1 -s EXPORTED_FUNCTIONS='["_sum_up","_main","_free","_malloc"]' -s EXPORT_ALL=1 -O3 -o hello.js || exit 1
mv hello.js ../web/gen/
mv hello.wasm ../web/gen/