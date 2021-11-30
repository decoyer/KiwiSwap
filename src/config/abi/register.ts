export const REGISTER_ADDRESS = '0x47a0B48FeB8cB71fD1aa56a0f2C6dcB7D6E4010a';

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
