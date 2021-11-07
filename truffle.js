module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  compilers: {
    solc: {
      version: "^0.4.2", // A version or constraint - Ex. "^0.5.0"
      }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 6385876,
      gasPrice: 20000000000
    }
  }
};
