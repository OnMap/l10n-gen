const xml2js = require('xml2js');
const { xmlBuilderOptions } = require('../../constants');

const convertObjectToParsedXML = (object = {}) => {
  const { attributeName, tagName, attrkey, charkey } = xmlBuilderOptions;
  const result = {};
  const body = [];

  Object.keys(object).forEach(key => {
    const item = {
      [charkey]: object[key], // TODO check value with quotes
      [attrkey]: {
        [attributeName]: key
      }
    };
    body.push(item);
  });

  result[tagName] = body;

  return result;
};

const buildTranslationsXML = (translations = {}) => {
  const { constructorOpts } = xmlBuilderOptions;
  const builder = new xml2js.Builder(constructorOpts);

  const parsedXML = convertObjectToParsedXML(translations);

  return builder.buildObject(parsedXML);
};

module.exports = {
  convertObjectToParsedXML,
  buildTranslationsXML
};
