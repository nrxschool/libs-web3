// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Complex {
    enum Gender {
        Male,
        Female
    }

    struct People {
        string name;
        uint8 age;
        Gender gender;
    }

    People[] peoples;

    function getAllPeople() external view returns (People[] memory) {
        return peoples;
    }

    function pushPeople(People memory person) external {
        peoples.push(person);
    }

    function pushPeopleArray(People[] memory persons) external {
        for (uint i = 0; i < persons.length; i++) {
            peoples.push(persons[i]);
        }
    }

    function pushGen(Gender gen) external view returns (string[] memory) {
        uint count = 0;
        for (uint i = 0; i < peoples.length; i++) {
            if (peoples[i].gender == gen) {
                count++;
            }
        }

        string[] memory result = new string[](count);
        uint index = 0;
        for (uint i = 0; i < peoples.length; i++) {
            if (peoples[i].gender == gen) {
                result[index] = peoples[i].name;
                index++;
            }
        }
        return result;
    }

    function getGender() external pure returns (Gender) {
        return Gender.Male;
    }

    function getPerson() external view returns (People memory) {
        require(peoples.length > 0, "No people available");
        return peoples[0];
    }

    function getAllNames() external view returns (string[] memory) {
        string[] memory names = new string[](peoples.length);
        for (uint i = 0; i < peoples.length; i++) {
            names[i] = peoples[i].name;
        }
        return names;
    }
}
