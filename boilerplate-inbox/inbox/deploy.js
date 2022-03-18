// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')


const provider = new HDWalletProvider('mechanic source address wild wave exchange cost joke spot frequent impact dwarf', 'https://rinkeby.infura.io/v3/61248be9a78e49e9a1d8636a2758d26a')

const web3 = new Web3(provider)


const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode, arguments: ['Hi there']
    }).send({
        gas: '1000000',
        from: accounts[0]
    })
    console.log('Contract deployed to', result.options.address)
    provider.engine.stop()
}
deploy();