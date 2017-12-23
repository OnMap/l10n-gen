
const glob = require('glob');

const IOS_EXTENSION = '**/*+(.swift|.storyboard)';

// glob(dir + "/**/*+(.swift|.storyboard)", function (er, results) {
//     console.log(files)
// })

// glob(dir + "/**/*.lproj", function (er, results) {
//     console.log(results)

// })

function localizationFiles(dir) {
  const searchLocation = dir + IOS_EXTENSION;
  glob(searchLocation, (er, results) =>
    results
  );
}

module.exports = localizationFiles;
