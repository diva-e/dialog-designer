const heading = {
  name: 'Heading',
  tag: 'He',
  category: 'Authoring Helper',
  description: 'Headline',
  id: 'heading',
  src: `<h{level}>{value}</h{level}>`,
  xml: `<MainHeading
  jcr:primaryType="nt:unstructured"
  sling:resourceType="granite/ui/components/coral/foundation/heading"
  level="{Long:level}"
  text="{value}"/>`,
};

export default heading;
