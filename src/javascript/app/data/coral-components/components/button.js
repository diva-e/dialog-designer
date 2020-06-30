const button = {
  name: 'Button',
  description: 'Just a button',
  id: 'button',
  src: `<button class="coral-Button coral-Button--secondary">
  {test}
</button>`,
  xml: `<{id}
  label="{label}"
  name="./{id}"
/>`,
};

export default button;
