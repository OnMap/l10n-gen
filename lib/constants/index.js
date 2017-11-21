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
  translationsFileNames: translationsFileNames,

  translationsDirectoryNames: {
    IOS: '.lproj',
    ANDROID: 'values'
  },

  allTranslationsFileNames: [
    {
      type: translationsFileTypes.IOS,
      fileName: translationsFileNames.IOS
    },
    {
      type: translationsFileTypes.ANDROID,
      fileName: translationsFileNames.ANDROID
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
};
