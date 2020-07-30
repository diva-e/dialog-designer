import formatXML from 'xml-formatter';

const XMLFormat = (dom) => {
  try {
    return (
      formatXML(new XMLSerializer().serializeToString(dom), {
        indentation: '  ',
        lineSeparator: '\n',
        whiteSpaceAtEndOfSelfclosingTag: true,
      })
    );
  } catch (error) {
    return error.message;
  }

};

export default XMLFormat;
