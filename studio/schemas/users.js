
import {defineField, defineType} from 'sanity'

export default defineType({
    name : 'users',
    title : 'Users',
    type : 'document',
    fields : [
        defineField(
            {
                name : 'username',
                title : 'Username',
                type : 'string',
            }
        ),
        defineField(
            {
                name : 'address',
                title : 'Wallet Address',
                type : 'string',
            }
        ),
        defineField(
            {
                name : 'transactions',
                title : 'Transactions',
                type : 'array',
                of : [
                    {
                        type : 'reference',
                        to : [{
                            type : 'nfts'
                        }]
                    }
                ]
            }
        ),
       defineField(
        {
            name : 'image',
            title : 'image',
            type : 'image',

        }
       )
    ],
    preview: {
        select: {title: 'image', media: 'image'},
    },
}
)