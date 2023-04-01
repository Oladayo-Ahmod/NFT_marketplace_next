import {defineField, defineType} from 'sanity'
export default defineField({
    name: 'nfts',
    title: 'NFT Items',
    type: 'document',
    fields: [
      // hash
      defineField({
        name : 'hash',
        title : 'Transaction Hash',
        type : 'string',
        // validation: (Rule) => Rule.required(),
      }),
      // SEller
      defineField({
        name : 'seller',
        title : 'NFT Seller',
        type : 'string'
      }),
       // TokenId
       defineField({
        name : 'tokenId',
        title : 'Token Id',
        type : 'number'
      }),
      // Owner
      defineField({
        name : 'owner',
        title : 'NFT owner',
        type : 'string'
      }),
       // Description
       defineField({
        name : 'description',
        title : 'NFT Description',
        type : 'string'
      }),
       // Properties
       defineField({
        name : 'properties',
        title : 'NFT properties',
        type : 'string'
      }),
       // Size
       defineField({
        name : 'size',
        title : 'NFT size',
        type : 'string'
      }),
       // Royalty
       defineField({
        name : 'royalty',
        title : 'NFT Royalty',
        type : 'string'
      }),
      // Price
      defineField({
        name : 'price',
        title : 'NFT Price',
        type : 'number'
      }),
       // Sold
       defineField({
        name : 'sold',
        title : 'Sold',
        type : 'boolean'
      }),
       // timestamp
       defineField({
        name : 'timestamp',
        title : 'Timestamp',
        type : 'datetime'
      }),
       // image
    //    defineField({
    //     name : 'image',
    //     title : 'NFT Image',
    //     type : 'image'
    //   }),
      
    ],
    // preview: {
    //   select: {
    //     active: 'active',
    //     seoImage: 'seo.image',
    //     title: 'title',
    //   },
    //   prepare(selection) {
    //     const {seoImage, title} = selection
  
    //     return {
    //       media: seoImage,
    //       title,
    //     }
    //   },
    // },
  })