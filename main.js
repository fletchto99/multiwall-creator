var gm = require('gm'),
    fs = require('fs'),
    config = require('./config.json');

fs.readdir(__dirname + '/out/', function (error, filenames) {
    if ((error && error.code == 'ENOENT') || filenames.length == 0) {
        fs.readdir(__dirname + '/in/', function (error, filenames) {
            var valid = [];
            filenames.forEach(function (filename) {
                if (filename.endsWith(config.suffix)) {
                    valid.push(filename);
                }
            });
            if (valid.length % config.num_screens !== 0) {
                console.log('The total amount of image files in the /in/ directory must be a multiple of ' + config.num_screens);
            } else {
                fs.mkdir(__dirname + '/out/', function (err) {
                    if (!err || err.code == 'EEXIST') {
                        var process = function (filenames, index) {
                            if (index >= filenames.length) {
                                return;
                            }
                            console.log('Processing at index ' + index);
                            var image = gm();
                            for (var i = 0; i < config.num_screens; i++) {
                                image.in('-page', '+' + i * config.width_per_screen + '+0');
                                image.in(__dirname + '/in/' + filenames[index + i]);
                            }
                            image.in('-quality', '100').mosaic().write(__dirname + '/out/' + (index / config.num_screens) + config.suffix, function (err) {
                                if (err) {
                                    console.log('Error processing ' + (index / config.num_screens));
                                    console.log(err);
                                } else {
                                    console.log('Done ' + (index / config.num_screens))
                                }
                            });
                            process(filenames, index + config.num_screens)
                        };
                        process(valid, 0)
                    } else {
                        console.log('Error creating output directory');
                        console.log(err);
                    }
                });

            }
        });
    } else {
        console.log('There are already files in the output folder, aborting!')
    }
});