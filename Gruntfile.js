module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('sum', function () {
        var args = Array.prototype.slice.call(arguments);
        var total = 0;
        for (var i = 0, l = args.length; i < l; i++) {
            total += Number(args[i]);
        }
        grunt.log.writeln('total : ' + total);
    });
};