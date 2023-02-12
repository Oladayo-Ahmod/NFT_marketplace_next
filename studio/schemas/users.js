export const users = {
    name : 'users',
    title : 'Users',
    type : 'string',
    field : [
        {
            name : 'username',
            title : 'Username',
            type : 'string',
        },
        {
            name : 'address',
            title : 'Wallet Address',
            type : 'string',
        },
        {
            name : 'username',
            title : 'username',
            type : 'string',
        },
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
        },
        {
            name : 'image',
            title : 'image',
            type : 'image',

        }
    ],
    preview: {
        select: {title: 'image', media: 'image'},
    },
}