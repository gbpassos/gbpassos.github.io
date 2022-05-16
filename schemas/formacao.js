export default {
    name: 'formacao',
    title: 'Formação',
    type: 'document',
    fields: [
      {
        name: 'year',
        title: 'Ano',
        type: 'number',
      },
      {
        name: 'where',
        title: 'Onde',
        type: 'string',
      },
      {
        name: 'icon',
        title: 'Icone',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'where',
      },
    },
  }
  