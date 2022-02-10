const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compileFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'garden calm caution custom gauge surge echo atom adapt speak antenna coyote',
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/53ba013833ad43f0929aaea2c6a93f21'
  // remember to change this to your own endpoint!
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
    .deploy({ data: compileFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(compileFactory.interface);

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};


deploy();
