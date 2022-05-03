require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note soap uncle harvest glide force ghost'; 
let testAccounts = [
"0x562bff01e0764dbca940d2cbffa585a9bd427dbc560b51a2c7491069d5ff5e67",
"0xc0ff1e329ca1cde169054d3fa786ef20982bca720e1bae6a07c9ef5e44952d80",
"0xfef59e914e2aa86d7e42b47b80cab4aa7c659c236fb0598e8e0a291e10d1ac74",
"0xa7da745b3b93c5f97102fb37bebc22040f57f1c3dd1e7e7e25ed8482d99f8a69",
"0xdd2c79a4d0402e22aba809a5430626d6fb0655bca5eb8adc1de115cd38c35db5",
"0xaccefaddbd2a0aec851094bf82e873c4b89432e697e308a099d8fd166eca537a",
"0xde903c1c5b0110b155a178ffe8143d8787ab5662970a33d51e99a9b3c054a0ef",
"0x7670d35cab8956b5df987e1a894615969052121cea301bafec7d4dd8f89ac5e8",
"0xe8dc5086ed1d4acb0db01ebc36e644a3b20098d8e568d7d9abd26054636b15fd",
"0xb570b0140d8268f991e79531ade751212ba6659467726d6997ef396f30eed356"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

