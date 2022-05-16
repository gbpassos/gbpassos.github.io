export default {
    name: 'experiencia',
    title: 'Experiência',
    type: 'document',
    fields: [
      {
        name: 'oque',
        title: 'O que',
        type: 'string',
      },
      {
        name: 'descricao',
        title: 'Descrição',
        type: 'text',
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'oque',
      },
    },
  }
  