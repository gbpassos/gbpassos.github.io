export default {
    name: 'arquivo',
    title: 'Arquivo',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Título',
            type: 'string',
        },
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
        },
        {
            name: 'file',
            title: 'Arquivo',
            type: 'file',
        }
    ],
    preview: {
        select: {
            title: 'name',
        }
    }
}