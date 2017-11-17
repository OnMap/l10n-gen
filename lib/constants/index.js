module.exports = {
  // entryTypes from 'unzip' module
  entryTypes: {
    FILE: 'File',
    DIRECTORY: 'Directory'
  },

  translationsFileTypes: {
    IOS: 'ios',
    ANDROID: 'android'
  },

  translationsFileNames: [
    {
      type: this.translationsFileTypes.IOS,
      fileName: 'Localizable.strings' // TODO move to config object in input arguments
    },
    {
      type: this.translationsFileTypes.ANDROID,
      fileName: 'strings.xml' // TODO move to config object in input arguments
    }
  ],

  xmlParserOptions: {
    attrkey: 'key',
    charkey: 'value',
    explicitRoot: false,
    trim: true
  }
};
