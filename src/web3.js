import Web3 from 'web3';

let web3;

if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  //TODO: #1
  alert('Please ask sam about MetaMask')
}
//QUESTION: why is the window object aware of web3

export default web3;