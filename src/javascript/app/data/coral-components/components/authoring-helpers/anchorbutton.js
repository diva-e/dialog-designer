const anchorbutton = {
  name: 'Anchorbutton',
  tag: 'AB',
  category: 'Authoring Helper',
  description: 'Button in different forms / Links',
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
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/anchorbutton"
  name="./{id}"
  size="{size}"
  variant="{variant}"
  x-cq-linkchecker="skip"
  target="_blank"
  text="{text}"
  href="{href}"
  title="{title}"/>`,
};

export default anchorbutton;
