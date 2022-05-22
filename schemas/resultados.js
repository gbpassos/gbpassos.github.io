export default {
    name: 'resultado',
    title: 'Resultados',
    type: 'document',
    fields: [
      {
        name: 'titulo',
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
        name: 'categoria',
        title: 'Categoria',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {type: 'category'},
          },
        ],
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'descricao',
        title: 'Descrição',
        type: 'blockContent',
      },
      {
          name: 'arquivos',
          title: 'Arquivos',
          type: 'itensrelacionados',
      }
    ],
    preview: {
      select: {
        title: 'titulo',
        media: 'image',
      },
    },
  }
  