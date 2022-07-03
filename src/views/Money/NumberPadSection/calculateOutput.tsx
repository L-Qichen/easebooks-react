const calculateOutput = (text: string, output = '0') => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (output === '0') {
        return text;
      } else {
        return output + text;
      };
    case 'Del.':
      if (output.length === 1) {
        return '';
      } else {
        return output.slice(0, -1);
      };
    case 'C':
      return '';
    default:
      return '';
  };
};

export { calculateOutput };
