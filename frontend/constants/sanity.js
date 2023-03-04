import sanityClient from '@sanity/client'

 export const client = sanityClient({
    projectId : '5c9frn9z',
    dataset : 'production',
    // apiVersion : 'v3',
    useCdn : false,
    token : 'skV4Rr2npIq2K8918YWOF2ejprxyIC9j85V8tunT1FzGAUS9DjXjCbX3j5LnpTZvvEj3Z32dsGOhpAX2pdGUH7X0c3VPCEe2KhzhvQ1qlmq5JB2dLYpS8gHjwIqGg1JOGO5wtGmegCwJcDx3PzUAqUFe7I0UWZeCCc74lDZLGlg1sv7fAIxl'
})
