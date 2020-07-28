const anchorbutton = {
  name: 'Anchorbutton',
  tag: 'AB',
  category: 'Authoring Helper',
  description: 'Button in diferent forms / Links',
  id: 'anchorbutton',
  createNode: {
    is: 'coral-button',
    creator: () => (
      Coral.Button()
    ),
  },
  src: `<button is="coral-button">
  {label}
</button>`,
  xml: `<{id}
  label="{label}"
  name="./{id}"
/>`,
};

export default anchorbutton;
