const anchorbutton = {
  name: 'Anchorbutton',
  tag: 'AB',
  category: 'Authoring Helper',
  description: 'Button in different forms / Links',
  id: 'anchorbutton',
  // createNode: {
  //   is: 'coral-button',
  //   creator: () => (
  //     Coral.Button()
  //   ),
  // },
  /* todo: preview output */
  src: '<coral-button>{label}</coral-button>',
  xml: `<{id}
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/form/anchorbutton"
  name="./{id}"
  size="{size}"
  variant="{variant}"
  x-cq-linkchecker="skip"
  target="_blank"
  text="{text}"
  href="javascript:alert('no function')"
  title="{title}"/>`,
};

export default anchorbutton;
