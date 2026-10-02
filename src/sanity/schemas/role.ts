export default {
  name: 'role',
  title: 'Role',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'shortTitle', type: 'string' },
    { name: 'intro', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'services', type: 'array', of: [{ type: 'string' }] },
    { name: 'accent', type: 'string' },
    { name: 'order', type: 'number' },
  ],
}
