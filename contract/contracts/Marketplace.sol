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
        createItem(newTokenId,price);
        
        return newTokenId;

    }
    
    // create item
    function createItem(uint256 tokenId,uint256 price) private {
        require(msg.value == listingPrice, "not a listed price");
        require(price > 0 ,"Price must be at least 1 WEI");
        MarketItemId[tokenId] = MarketItem(
          tokenId,
          payable(msg.sender),
          payable(address(this)),
          price,
          false
        );

        _transfer(msg.sender,address(this),tokenId);

    }
    
    // create item sale
    function createSale(uint256 tokenId) public payable {
        uint price = MarketItemId[tokenId].price;
        address seller = MarketItemId[tokenId].seller;
        require(msg.value == price,'price must be equal to the listed price');
        MarketItemId[tokenId].sold = true;
        MarketItemId[tokenId].seller = payable(address(0));
        MarketItemId[tokenId].owner = payable(msg.sender);
        _transfer(address(this),msg.sender,tokenId); // transfer ownership
        _itemSold.increment();
        // payable(address(this)).transfer(listingPrice); // transfer listing price to the marketplace owner
        payable(seller).transfer(msg.value); // transfer value to the item seller
    
    }