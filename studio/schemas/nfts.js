import {defineField, defineType} from 'sanity'

export default defineType({
    name : 'nfts',
    title : 'NFTs',
    type : 'document',
    fields : [
       defineField(
        {
            name : 'hash',
            title : 'Transaction Hash',
            type : 'string'
        }
       ),
       defineField( {
        name : 'seller',
        title : 'NFT Seller',
        type : 'string'
        }),
        defineField(
            {
                name : 'owner',
                title : 'NFT Owner',
                type : 'string'
            }
        ),
        defineField(
            {
                name : 'price',
                title : 'NFT Price',
                type : 'number'
            }
        ),
        defineField( {
        name : 'sold',
        title : 'Sold',
        type : 'boolean'
        }),
        defineField(
            {
                name : 'timestamp',
                title : 'Timestamp',
                type : 'datetime'
            }
        ),
        defineField(
            {
                name : 'image',
                title : 'NFT Image',
                type : 'image'
            }
        ),
        defineField(
            {
                name : 'size',
                title : 'NFT Size',
                type : 'number'
            }
        ),
        defineField(
            {
                name : 'royalty',
                title : 'NFT Royalty',
                type : 'string'
            }
        ),
       defineField(
        {
            name : 'properties',
            title : 'NFT Properties',
            type : 'string'
        }
       ),
       defineField(
        {
            name : 'tokenId',
            title : 'Token ID',
            type : 'number'
        }
       )
    ],
    preview: {
        select: {title: 'NFT Image', media: 'image'},
      },

}
)