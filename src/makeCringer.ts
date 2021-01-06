function makeCringeClassic(input: string): string {
  let out = '';
  for (let i = 0; i < input.length; i += 1) {
    if (i % 2 === 0) {
      out += input[i].toUpperCase();
    } else {
      out += input[i].toLowerCase();
    }
  }
  return out;
}

function makeCringeInverse(input: string): string {
  let out = '';
  for (let i = 0; i < input.length; i += 1) {
    if (i % 2 !== 0) {
      out += input[i].toUpperCase();
    } else {
      out += input[i].toLowerCase();
    }
  }
  return out;
}

const regex = /( |\.|,|;|:|'|\?|!)/;

function makeCringeNoSpaces(input: string): string {
  let out = '';
  let realIndex = 0;
  for (let i = 0; i < input.length; i += 1) {
    const symbol = input[i].match(regex);
    if (symbol) {
      out += symbol[0];
    } else {
      if (realIndex % 2 === 0) {
        out += input[i].toUpperCase();
      } else {
        out += input[i].toLowerCase();
      }
      realIndex += 1;
    }
  }
  return out;
}

function makeCringeNoSpacesInverse(input: string): string {
  let out = '';
  let realIndex = 0;
  for (let i = 0; i < input.length; i += 1) {
    const symbol = input[i].match(regex);
    if (symbol) {
      out += symbol[0];
    } else {
      if (realIndex % 2 !== 0) {
        out += input[i].toUpperCase();
      } else {
        out += input[i].toLowerCase();
      }
      realIndex += 1;
    }
  }
  return out;
}

export {
  makeCringeClassic,
  makeCringeInverse,
  makeCringeNoSpaces,
  makeCringeNoSpacesInverse,
};
