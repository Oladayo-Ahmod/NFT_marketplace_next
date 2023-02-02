//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract Marketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _itemId;
    Counters.Counter private _itemSold;
    address payable marketplaceOwner;

    constructor() ERC721("Ahmad Token","AMT"){
        marketplaceOwner = payable(msg.sender);
    }
    
    }