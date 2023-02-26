import sanityClient from '@sanity/client'

 export const client = sanityClient({
    projectId : '7d3jmmyd',
    dataset : 'production',
    apiVersion : 'v1',
    useCdn : false,
    token : 'sk6rwArQLPPukbOWJimKhWw6pHc2j419PyN4dNxIvgnNOHGRKlfFs7gm0kwHdylkFEmv4CpMKkLy7fzf0u8vu2rFT9wBe9jcgueoXrtHJYjstRuH9drCCWK0DFQaQ5nEunWqC3FJ6ugIjHlqW2ef1QU0Nmm5sjrkBCCHwKMihak5BVCqgIDQ'
})
