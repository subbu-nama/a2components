var typedoc = require("gulp-typedoc");
var gulp = require("gulp");
gulp.task("typedoc", function() {
    return gulp
        .src(["src/app/helloangular2/*.component.ts"])
        .pipe(typedoc({
            mode: "modules",
            module: "commonjs",
            target: "ES6",
            out:"out/",
            name: "a2components",
            ignoreCompilerErrors: false,
            version: true,
            experimentalDecorators:true
        }));
});