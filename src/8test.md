console.log("Hello");
tsconfig.json에다가 outDir을 "./dist"로지정-> src에 test,js생김

만약 rootDir도 "./src"로 지정하면

dist 폴더에 test.js가 생김.

만약 rootDir을 주석처리해도, 가장 상위 폴더에서 생기기때문에 src
rootDir을 지정하지 않으면, 전체 파일에서 타입스크립트파일을 컴파일하려고해서. 상위에 생성.
