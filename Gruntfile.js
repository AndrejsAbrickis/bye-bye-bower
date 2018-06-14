const Assets = require('./assets');

module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: Assets.map((asset) => {
                    return {
                        flatten: true,
                        src: `./node_modules/${asset}`,
                        dest: `public_assets/3rd-party-assets-grunt/${asset}`
                    }
                })
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
};