import ABI from '../src/constants/abi';

let Web3 = require("web3");

export const CONTRACT_ADDRESS = "0xBEb19A134E55841260eb82354F8Aa4987d3b44dA"; 

//If no metamask use  my own goerli node to read
export const web3 = new Web3(window.ethereum || new Web3(new  Web3.providers.WebsocketProvider(
  "wss://goerli.infura.io/ws/v3/23ce65d5556b49dab6c2078e0dc0840c")))

  if(window.ethereum) window.ethereum.autoRefreshOnNetworkChange = false; 

  const SMART_CONTRACT = new web3.eth.Contract(ABI,CONTRACT_ADDRESS); 

  export default SMART_CONTRACT; 