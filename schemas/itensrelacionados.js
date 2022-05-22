export default {
    name: 'itensrelacionados',
    title: 'Item relacionado',
    type: 'array',
    of: [ 
        {
        type: 'reference',
        to: [
            {type: 'arquivo'},
            {type: 'post'},
        ]
        }
    ],
}