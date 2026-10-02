export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    {
      name: 'role',
      type: 'string',
      options: {
        list: [
          { title: 'Fotografe', value: 'fotografe' },
          { title: 'Gastvrouw', value: 'gastvrouw' },
          { title: 'Fotografische Gastvrouw', value: 'fotografische-gastvrouw' },
        ],
      },
    },
    { name: 'image', type: 'image' },
    { name: 'order', type: 'number' },
  ],
}
