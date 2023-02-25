import {sanityClient} from '@sanity/client'

export const client = sanityClient({
    projectId : '',
    dataset : 'production',
    apiVersion : 'v1',
    useCdn : false,
    token : ''
})