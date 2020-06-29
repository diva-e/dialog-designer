const stringFormat = (string, replacements = {}) => (
  string.replace(/{([\d\w]+)}/g, (match, number) => (
    typeof replacements[number] !== 'undefined' ? replacements[number] : match
  ))
);

export default stringFormat;
