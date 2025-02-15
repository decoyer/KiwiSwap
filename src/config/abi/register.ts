export const REGISTER_ADDRESS = 'Your Wallet Address';

export const REGISTER_ABI = [
  {
    inputs: [],
    name: 'getInfo',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_info',
        type: 'string',
      },
    ],
    name: 'setInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
