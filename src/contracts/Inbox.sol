pragma solidity >=0.4.22 <0.6.0;

contract Inbox {
  string public message = "Inbox";

  function setMessage(string  memory _newMessage) public {
        message = _newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
