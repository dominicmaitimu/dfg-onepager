export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'intro', type: 'text' },
    { name: 'body', type: 'text' },
    { name: 'image', type: 'image' },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'accent', type: 'string' },
  ],
}
