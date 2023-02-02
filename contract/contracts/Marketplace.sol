//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract Marketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;
    Counters.Counter private _itemSold;
    address payable marketplaceOwner;
    uint256 listingPrice = 0.05 ether;
    
    mapping(uint256 => MarketItem) MarketItemId;
    struct MarketItem {
      uint256 tokenId;
      address payable seller;
      address payable owner;
      uint256 price;
      bool sold;
    }

    constructor() ERC721("Ahmad Token","AMT"){
        marketplaceOwner = payable(msg.sender);
    }

    // get listing price
    function getListingPrice() public view returns (uint256){
        return listingPrice;
    }

    // update listing price
    function updateListingPrice(uint _listingPrice) public payable{
        require(msg.sender == marketplaceOwner);
        listingPrice = _listingPrice;
    }

    // create and mint token
    function createToken(string memory tokenURI, uint256 price) public payable returns(uint){
        _tokenId.increment();
        uint256 newTokenId = _tokenId.current();
        _mint(msg.sender,newTokenId);
        _setTokenURI(newTokenId,tokenURI);
        return newTokenId;

    }
 
    
    
    }