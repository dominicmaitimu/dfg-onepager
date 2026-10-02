export default {
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'date', type: 'string' },
    { name: 'client', type: 'string' },
    { name: 'location', type: 'string' },
    {
      name: 'roles',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Fotografe', value: 'fotografe' },
          { title: 'Gastvrouw', value: 'gastvrouw' },
          { title: 'Fotografische Gastvrouw', value: 'fotografische-gastvrouw' },
        ],
      },
    },
    { name: 'type', type: 'string' },
    { name: 'intro', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'coverImage', type: 'image' },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'featured', type: 'boolean' },
    { name: 'order', type: 'number' },
  ],
}
