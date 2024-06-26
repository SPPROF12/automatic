const paymentTypes = [
  { label: 'Bank Transfer', value: 'bank_transfer' },
  { label: 'Cash', value: 'cash' },
  { label: 'Debit', value: 'debit' },
  { label: 'ACH', value: 'ach' },
  { label: 'Visa Card', value: 'visa_card' },
  { label: 'MasterCard', value: 'master_card' },
  { label: 'American Express', value: 'american_express' },
  { label: 'Discover Card', value: 'discover_card' },
  { label: 'Diners Card', value: 'diners_card' },
  { label: 'EuroCard', value: 'euro_card' },
  { label: 'Nova', value: 'nova' },
  { label: 'Credit Card Other', value: 'credit_card_other' },
  { label: 'PayPal', value: 'paypal' },
  { label: 'Google Wallet', value: 'google_wallet' },
  { label: 'Check', value: 'check' },
  { label: 'Carte Blanche', value: 'carte_blanche' },
  { label: 'UnionPay', value: 'unionpay' },
  { label: 'JCB', value: 'jcb' },
  { label: 'Laser', value: 'laser' },
  { label: 'Maestro', value: 'maestro' },
  { label: 'Solo', value: 'solo' },
  { label: 'Switch', value: 'switch' },
  { label: 'iZettle', value: 'izettle' },
  { label: 'Swish', value: 'swish' },
  { label: 'Venmo', value: 'venmo' },
  { label: 'Money Order', value: 'money_order' },
  { label: 'Alipay', value: 'alipay' },
  { label: 'Sofort', value: 'sofort' },
  { label: 'SEPA', value: 'sepa' },
  { label: 'GoCardless', value: 'gocardless' },
  { label: 'Bitcoin', value: 'bitcoin' },
];

export const fields = [
  {
    label: 'Client ID',
    key: 'clientId',
    type: 'dropdown',
    required: true,
    description: 'The ID of the client, not the name or email address.',
    variables: true,
    source: {
      type: 'query',
      name: 'getDynamicData',
      arguments: [
        {
          name: 'key',
          value: 'listClients',
        },
      ],
    },
  },
  {
    label: 'Payment Date',
    key: 'paymentDate',
    type: 'string',
    required: false,
    description: '',
    variables: true,
  },
  {
    label: 'Invoice',
    key: 'invoiceId',
    type: 'dropdown',
    required: false,
    description: '',
    variables: true,
    source: {
      type: 'query',
      name: 'getDynamicData',
      arguments: [
        {
          name: 'key',
          value: 'listInvoices',
        },
      ],
    },
  },
  {
    label: 'Invoice Amount',
    key: 'invoiceAmount',
    type: 'string',
    required: false,
    description: '',
    variables: true,
  },
  {
    label: 'Payment Type',
    key: 'paymentType',
    type: 'dropdown',
    required: false,
    description: '',
    variables: true,
    options: paymentTypes,
  },
  {
    label: 'Transfer Reference',
    key: 'transferReference',
    type: 'string',
    required: false,
    description: '',
    variables: true,
  },
  {
    label: 'Private Notes',
    key: 'privateNotes',
    type: 'string',
    required: false,
    description: '',
    variables: true,
  },
];

