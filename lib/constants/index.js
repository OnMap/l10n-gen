const translationsFileTypes = {
  IOS: 'IOS',
  ANDROID: 'ANDROID'
};

const translationsFileNames = {
  IOS: 'Localizable.strings',
  ANDROID: 'strings.xml'
};

module.exports = {
  // entryTypes from 'unzip' module
  entryTypes: {
    FILE: 'File',
    DIRECTORY: 'Directory'
  },

  translationsFileTypes: translationsFileTypes,
  translationsFileNames: [
    {
      type: translationsFileTypes.IOS,
      fileName: 'Localizable.strings' // TODO move to config object in input arguments
    },
    {
      type: translationsFileTypes.ANDROID,
      fileName: 'strings.xml' // TODO move to config object in input arguments
    }
  ],

  xmlParserOptions: {
    attrkey: 'key',
    charkey: 'value',
    explicitRoot: false,
    trim: true
  },

  xmlBuilderOptions: {
    tagName: 'string',
    attributeName: 'name'
  }
}
