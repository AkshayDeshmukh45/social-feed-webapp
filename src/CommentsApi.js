export const getComments = async ()=> {
    return [
        {
            id: '1',
            body: 'This is a comment',
            username:'Jack Sparrow',
            userId: '1',
            parentId: 'null',
        },
           {
            id: '2',
            body: 'This is a second comment',
            username:'John Sparrow',
            userId: '2',
            parentId: 'null',
        }
    ]
}