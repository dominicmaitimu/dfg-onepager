export default {
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    { name: 'image', type: 'image' },
    { name: 'alt', type: 'string' },
    { name: 'caption', type: 'string' },
    { name: 'category', type: 'string' },
    { name: 'featured', type: 'boolean' },
    { name: 'order', type: 'number' },
  ],
}
