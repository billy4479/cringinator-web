function makeCringeClassic(input: string): string {
  let out = '';
  for (let i = 0; i < input.length; i++) {
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
  for (let i = 0; i < input.length; i++) {
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
  for (let i = 0; i < input.length; i++) {
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
  for (let i = 0; i < input.length; i++) {
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

function addSpaces(input: string, n: number): string {
  return input.split('').join('\xa0'.repeat(n));
}

export {
  makeCringeClassic,
  makeCringeInverse,
  makeCringeNoSpaces,
  makeCringeNoSpacesInverse,
  addSpaces,
};
