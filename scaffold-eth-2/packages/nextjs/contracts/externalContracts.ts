import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    1337: {
        YourContract: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "address[]",
                  name: "_assignees",
                  type: "address[]",
                },
              ],
              name: "addContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_assignee",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "assignContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "assigneesContractList",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "contracts",
              outputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "status",
                  type: "bool",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_assignee",
                  type: "address",
                },
              ],
              name: "getCompleteContracts",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "index",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "status",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "bool[]",
                      name: "assigns",
                      type: "bool[]",
                    },
                    {
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "assignee",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct YourContract.contractR[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_assignee",
                  type: "address",
                },
              ],
              name: "getContracts",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "index",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "status",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "bool[]",
                      name: "assigns",
                      type: "bool[]",
                    },
                    {
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "assignee",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct YourContract.contractR[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_assignee",
                  type: "address",
                },
              ],
              name: "getPendentContracts",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "index",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "status",
                      type: "bool",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "description",
                      type: "string",
                    },
                    {
                      internalType: "bool[]",
                      name: "assigns",
                      type: "bool[]",
                    },
                    {
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "assignee",
                      type: "address[]",
                    },
                  ],
                  internalType: "struct YourContract.contractR[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "ownersContractList",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_assignee",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "verifyStatus",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          inheritedFunctions: {},
        },
      },
    } as const;

export default externalContracts satisfies GenericContractsDeclaration;
