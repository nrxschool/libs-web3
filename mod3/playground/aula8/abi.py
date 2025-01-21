abi = [
    {
        "type": "function",
        "name": "getAllNames",
        "inputs": [],
        "outputs": [{"name": "", "type": "string[]", "internalType": "string[]"}],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "getAllPeople",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct Complex.People[]",
                "components": [
                    {"name": "name", "type": "string", "internalType": "string"},
                    {"name": "age", "type": "uint8", "internalType": "uint8"},
                    {
                        "name": "gender",
                        "type": "uint8",
                        "internalType": "enum Complex.Gender",
                    },
                ],
            }
        ],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "getGender",
        "inputs": [],
        "outputs": [
            {"name": "", "type": "uint8", "internalType": "enum Complex.Gender"}
        ],
        "stateMutability": "pure",
    },
    {
        "type": "function",
        "name": "getPerson",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct Complex.People",
                "components": [
                    {"name": "name", "type": "string", "internalType": "string"},
                    {"name": "age", "type": "uint8", "internalType": "uint8"},
                    {
                        "name": "gender",
                        "type": "uint8",
                        "internalType": "enum Complex.Gender",
                    },
                ],
            }
        ],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "pushGen",
        "inputs": [
            {"name": "gen", "type": "uint8", "internalType": "enum Complex.Gender"}
        ],
        "outputs": [{"name": "", "type": "string[]", "internalType": "string[]"}],
        "stateMutability": "view",
    },
    {
        "type": "function",
        "name": "pushPeople",
        "inputs": [
            {
                "name": "person",
                "type": "tuple",
                "internalType": "struct Complex.People",
                "components": [
                    {"name": "name", "type": "string", "internalType": "string"},
                    {"name": "age", "type": "uint8", "internalType": "uint8"},
                    {
                        "name": "gender",
                        "type": "uint8",
                        "internalType": "enum Complex.Gender",
                    },
                ],
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
    },
    {
        "type": "function",
        "name": "pushPeopleArray",
        "inputs": [
            {
                "name": "persons",
                "type": "tuple[]",
                "internalType": "struct Complex.People[]",
                "components": [
                    {"name": "name", "type": "string", "internalType": "string"},
                    {"name": "age", "type": "uint8", "internalType": "uint8"},
                    {
                        "name": "gender",
                        "type": "uint8",
                        "internalType": "enum Complex.Gender",
                    },
                ],
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable",
    },
]
