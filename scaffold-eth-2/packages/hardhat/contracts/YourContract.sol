//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */

contract YourContract {
    uint indexContract = 0;
    struct contractR{
        uint index;
        bool status;
        string name;
        string description;
        bool[] assigns;
        address owner;
        address[] assignee;
        string link;
        uint countSignatures;
    }
    mapping(uint => contractR) public contracts;
    mapping(address => uint[]) public ownersContractList;
    mapping(address => uint[]) public assigneesContractList;
    function addContract(address _owner,string memory _name, string memory _description,address[] memory _assignees, string memory _link) public {
        indexContract++;
        ownersContractList[_owner].push(indexContract);
        assigneesContractList[_owner].push(indexContract);
        for (uint i = 0; i < _assignees.length; i++) {
            assigneesContractList[_assignees[i]].push(indexContract);
        }
        contracts[indexContract] = contractR(indexContract, true, _name, _description,new bool[](_assignees.length+1),_owner,_assignees, _link,0);
    }
    function getContracts(address _assignee) public view returns (contractR[] memory) {
        uint[] memory _contracts = assigneesContractList[_assignee];
       contractR[] memory _contractR = new contractR[](_contracts.length);
        for (uint i = 0; i < _contracts.length; i++) {
            _contractR[i] = contracts[_contracts[i]];
        }
        return _contractR;
    }
       function getPendentContracts(address _assignee) public view returns (contractR[] memory) {
        uint[] memory _contracts = assigneesContractList[_assignee];
        contractR[] memory _contractR = new contractR[](_contracts.length);
        for (uint i = 0; i < _contracts.length; i++) {
            if(contracts[_contracts[i]].status){
            _contractR[i] = contracts[_contracts[i]];            }
        }
        return _contractR;
    }
        function getCompleteContracts(address _assignee) public view returns (contractR[] memory) {
        uint[] memory _contracts = assigneesContractList[_assignee];
        contractR[] memory _contractR = new contractR[](_contracts.length);
        for (uint i = 0; i < _contracts.length; i++) {
            if(!contracts[_contracts[i]].status){
            _contractR[i] = contracts[_contracts[i]];            }
        }
        return _contractR;
    }
    function assignContract(address _assignee,address _owner ) public {
        uint[] memory _contracts = assigneesContractList[_assignee];
        if (_assignee == _owner) {
            for (uint i = 0; i < _contracts.length; i++) {
                if(contracts[_contracts[i]].owner == _assignee){
                    contracts[_contracts[i]].assigns[0] = true;
                    contracts[_contracts[i]].countSignatures++;
                            if(contracts[_contracts[i]].assigns.length==contracts[_contracts[i]].countSignatures){
                                contracts[_contracts[i]].status = false;
                            }

                    
                    }
                    
                }
        

        }else{
            for (uint i = 0; i < _contracts.length; i++) {
                if(contracts[_contracts[i]].owner == _owner){
                    contracts[_contracts[i]].assigns[1] = true;
                    contracts[_contracts[i]].countSignatures++;
                            if(contracts[_contracts[i]].assigns.length==contracts[_contracts[i]].countSignatures){
                                contracts[_contracts[i]].status = false;
                            }

                    
                    
                }
            }
        }
}
    function verifyStatus(address _assignee,address _owner) public view returns (bool) {
        uint[] memory _contracts = assigneesContractList[_assignee];
        for (uint i = 0; i < _contracts.length; i++) {
            if(contracts[_contracts[i]].owner == _owner){
                    if(contracts[_contracts[i]].owner == _owner){
                        return contracts[_contracts[i]].status;
                    }
        }
    }
    return true;
}
}
