var program = require('commander');

program
  .version('0.0.1')
  .command('apk-parser <apk>')
  .action(function (apk) {
    console.log('apk-parser %s', apk);
    var parseApk = require('apk-parser');

    if (apk) {
      parseApk(apk, function (err, data) {
        console.log(data.manifest['@package']);
      });
    }
  }).parse(process.argv);
