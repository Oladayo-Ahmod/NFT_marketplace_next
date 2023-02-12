export const nfts = {
    name : 'nfts',
    title : 'NFTs',
    type : 'document',
    fields : [
        {
            name : 'hash',
            title : 'Transaction Hash',
            type : 'string'
        },
        {
            name : 'seller',
            title : 'NFT Seller',
            type : 'string'
        },
        {
            name : 'owner',
            title : 'NFT Owner',
            type : 'string'
        },
        {
            name : 'price',
            title : 'NFT Price',
            type : 'number'
        },
        {
            name : 'sold',
            title : 'Sold',
            type : 'boolean'
        },
        {
            name : 'timestamp',
            title : 'Timestamp',
            type : 'datetime'
        },
        {
            name : 'image',
            title : 'NFT Image',
            type : 'image'
        }
    ],
    preview: {
        select: {title: 'NFT Image', media: 'image'},
      },

}