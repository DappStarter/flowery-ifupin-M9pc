require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note pitch solid idea enter metal giant'; 
let testAccounts = [
"0x4b2549a389d762efbba659642cf2831d7e9e1f1b9b201d2ee1761f32f8bc6404",
"0x616155f818d6dd9a565ceefd1a87d4db1470490dcb09e639a755c0271b32fc08",
"0xfa58f29667305032f486a0c6708addf092f615e2b93bcbbb6ad5ea186efca438",
"0xb896d0a4560b6fcd2d866ae6796f271f925aa16329db4b72d87b7ada9efb81d1",
"0xb033ac928073c9138d90c5a34bbdeedc9d8abb018d6ab3163b2150f4dbf789ec",
"0xd6d39e3ec10e30a47e4e73d23242a2b3eba5fd153c143517f4695e4c43518bd6",
"0xd2826deaf555bfdbb4d7fcad74050df9383d7342b4856772d635228b18e92e4b",
"0x94d132074176d43d90045e2b5fcf803fc37de3cdbd383dfca6168d6bf067c263",
"0xc681bdb090f89c1968236863ad6dd6ca2c4e9ef04a0ff454eea7567746465e8d",
"0x44e0a8871d9333c602073f77cc7ec5bc282d7d4a7fe7a8f380d420102c4bdae6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

