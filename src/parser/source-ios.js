
const glob = require('glob');

const IOS_EXTENSION = '**/*+(.swift|.storyboard)';

// glob(dir + "/**/*+(.swift|.storyboard)", function (er, results) {
//     console.log(files)
// })

// glob(dir + "/**/*.lproj", function (er, results) {
//     console.log(results)

// })

function localizationFiles(dir) {
  const search = IOS_EXTENSION;
  glob(search, (er, results) => {
    console.log(results);
    return results;
  });
}

module.exports = localizationFiles;
