pragma solidity ^0.5.5;

contract SimpleStore {

  event NewValueSet(address, string);
  event NewValueSetAgain(address, string);

  function set(string memory value) public {
    emit NewValueSet(msg.sender, value);
  }

  function setAgain(string memory value) public {   
    emit NewValueSetAgain(msg.sender, value);
  }

  function get() public view returns (string memory value, address) {
    return (value, msg.sender);
  }

}
