pragma solidity ^0.4.23;

// GetterSetter is a contract to aid debugging and testing during development.
contract GetterSetter {
  bytes32 public getBytes32;
  uint256 public getUint256;
  bytes32 public externalId;

  event SetBytes32(address indexed from, bytes32 indexed value);
  event SetUint256(address indexed from, uint256 indexed value);

  event Output(bytes32 b32, uint256 u256, bytes32 b322);

  function setBytes32(bytes32 _value) public {
    getBytes32 = _value;
    emit SetBytes32(msg.sender, _value);
  }

  function requestedBytes32(bytes32 _externalId, bytes32 _value) public {
    externalId = _externalId;
    setBytes32(_value);
  }

  function setUint256(uint256 _value) public {
    getUint256 = _value;
    emit SetUint256(msg.sender, _value);
  }

  function requestedUint256(bytes32 _externalId, uint256 _value) public {
    externalId = _externalId;
    setUint256(_value);
  }
}
