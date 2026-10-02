export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'quote', type: 'text' },
    { name: 'names', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'project', type: 'string' },
    { name: 'image', type: 'image' },
    { name: 'order', type: 'number' },
  ],
}
