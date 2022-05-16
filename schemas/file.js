export default {
    name: 'filename',
    title: 'Nome do arquivo',
    type: 'file',
    fields: [
        {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 96,
        },
    },
    {
        name: 'description',
        title: 'Descrição',
        type: 'string',
    }
    ],
}