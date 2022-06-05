import slugify from 'slugify'

export default {
    name: 'empresa',
    title: 'Empresa apoiada',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome da empresa',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'nome',
              slugify: (input) => `${slugify(input, {lower: true})}`,
            },
        },
        {
            name: 'descricao',
            title: 'Descrição',
            type: 'blockContent',
        },
        {
            name: 'itemrelacionado',
            title: 'Item relacionado',
            type: 'itensrelacionados',
        },
    ]
}