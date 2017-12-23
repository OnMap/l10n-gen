const { joinPairToLine, reduceTranslationsToStringForIOS } = require('../../src/archiver/utils/iosBuilderUtils');

const translationsPair = ['Account.CancelBarButton', 'Cancel'];

const iOSTranslationsLine = '"Account.CancelBarButton" = "Cancel"';

const translationsObject = {
  'Account.CancelBarButton': 'Cancel',
  'Account.Login.EmailErrorLabel': 'Enter a valid email address',
  'Account.Login.EmailTextField': 'Email address',
  'Account.Login.ForgotButton': 'Forgot password?',
  'Account.Login.LoginButton': 'Login',
};

const iOSTranslations = `"Account.CancelBarButton" = "Cancel";
"Account.Login.EmailErrorLabel" = "Enter a valid email address";
"Account.Login.EmailTextField" = "Email address";
"Account.Login.ForgotButton" = "Forgot password?";
"Account.Login.LoginButton" = "Login";`;

describe('Builder utils for iOS', () => {
  it('reduce pair array to string for iOS', () => {
    expect(joinPairToLine(translationsPair)).toEqual(iOSTranslationsLine);
  });

  it('reduce iOS translations from object', () => {
    expect(reduceTranslationsToStringForIOS(translationsObject)).toEqual(iOSTranslations);
  });
});

