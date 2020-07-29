const heading = {
  name: 'Heading',
  tag: 'He',
  category: 'Authoring Helper',
  description: 'Headline',
  id: 'heading',
  src: `<h{level}>{text}</h{level}>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/heading"
    level="{Long:level}"
    text="{text}"/>`,
};

export default heading;
