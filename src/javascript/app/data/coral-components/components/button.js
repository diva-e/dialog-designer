const button = {
  name: 'Button',
  description: 'Just a button',
  id: 'button',
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

export default button;
