import generateAuthUrl from './generate-auth-url.js';
import verifyCredentials from './verify-credentials.js';
import refreshToken from './refresh-token.js';
import isStillVerified from './is-still-verified.js';

const WEB_APP_URL = '{WEB_APP_URL}';

const fields = [
  {
    key: 'oAuthRedirectUrl',
    label: 'OAuth Redirect URL',
    type: 'string',
    required: true,
    readOnly: true,
    value: `${WEB_APP_URL}/app/google-sheets/connections/add`,
    placeholder: null,
    description:
      'When asked to input a redirect URL in Google Cloud, enter the URL above.',
    clickToCopy: true,
  },
  {
    key: 'clientId',
    label: 'Client ID',
    type: 'string',
    required: true,
    readOnly: false,
    value: null,
    placeholder: null,
    description: null,
    clickToCopy: false,
  },
  {
    key: 'clientSecret',
    label: 'Client Secret',
    type: 'string',
    required: true,
    readOnly: false,
    value: null,
    placeholder: null,
    description: null,
    clickToCopy: false,
  },
];

const config = {
  generateAuthUrl,
  verifyCredentials,
  isStillVerified,
  refreshToken,
};

export { fields, config };

