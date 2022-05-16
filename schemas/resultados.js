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
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      },
      {
          name: 'arquivos',
          title: 'Arquivos',
          type: 'array',
          of: [ {type: 'file'} ],
      }
    ],
    preview: {
      select: {
        title: 'titulo',
        media: 'image',
      },
    },
  }
  