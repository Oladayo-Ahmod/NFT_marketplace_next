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

     event MarketItemCreated (
      uint256 indexed tokenId,
      address seller,
      address owner,
      uint256 price,
      bool sold
    );

    event ItemSold(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );
    event ItemResold(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

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

    // get item by id
    function getItemById(uint256 tokenId) public view returns(MarketItem memory){
        return MarketItemId[tokenId];
        
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

         emit MarketItemCreated(
        tokenId,
        msg.sender,
        address(this),
        price,
        false
      );

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
        emit ItemSold(tokenId,address(0),msg.sender,price,true);

    
    }

    // resell a purchased item
    function resellItem(uint256 tokenId, uint256 price) public payable {
        require(msg.value == listingPrice,'value is not equal to the listing price');
        require(price > 0, 'price should be at least 1 WEI');
        require(msg.sender == MarketItemId[tokenId].owner, 'you are not the authorized of this item');
        MarketItemId[tokenId].seller = payable(address(this));
        MarketItemId[tokenId].owner = payable(msg.sender);
        MarketItemId[tokenId].sold = false;
        MarketItemId[tokenId].price = price;
        _transfer(msg.sender,address(this),tokenId); // transfer ownership to the contract address
        _itemSold.decrement();
        emit ItemResold(tokenId,msg.sender,address(this),price,false);
    }

    // fetch all unsold items
    function allUnsoldItems() public view returns(MarketItem[] memory){
         uint totalItem = _tokenId.current();
         uint unsoldItems = totalItem - _itemSold.current();
         uint currentIndex = 0;
         MarketItem[] memory items = new MarketItem[](unsoldItems);
         for (uint i = 0; i < totalItem; i++) { 
            if (MarketItemId[i +1].owner == address(this)) {
                uint currentId = i +1; // try with zero later
                MarketItem storage currentItem = MarketItemId[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
         }
        return items;
    }

    // fetch all items purchased by a user
    function fetchMyItems() public view returns(MarketItem[] memory){
        uint totalItems = _tokenId.current();
        uint totalPurchased = 0;
        uint currentIndex = 0;
        
        for (uint i = 0; i < totalItems; i++) {
            if (MarketItemId[i + 1].owner == msg.sender) {
                totalPurchased += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](totalPurchased);
        for (uint i = 0; i < totalItems; i++) {
            if (MarketItemId[i + 1].owner == msg.sender) {
                uint currentId = i + 1;
                MarketItem storage currentItems = MarketItemId[currentId];
                items[currentIndex] = currentItems;
                currentIndex += 1;

            }
        }
        return items;


    }

    // fetch all nfts listed by a particular user
    function fetchMyListedItems() public view returns(MarketItem[] memory){
        uint totalItems = _tokenId.current();
        uint totalListed = 0;
        uint currentIndex = 0;
        
        for (uint i = 0; i < totalItems; i++) {
            if (MarketItemId[i + 1].seller == msg.sender) {
                totalListed += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](totalListed);
        for (uint i = 0; i < totalItems; i++) {
            if (MarketItemId[i + 1].seller == msg.sender) {
                uint currentId = i + 1;
                MarketItem storage currentItems = MarketItemId[currentId];
                items[currentIndex] = currentItems;
                currentIndex += 1;

            }
        }
        return items;
    }



}