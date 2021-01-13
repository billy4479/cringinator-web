import {
  addSpaces,
  makeCringeClassic,
  makeCringeInverse,
  makeCringeNoSpaces,
  makeCringeNoSpacesInverse,
} from './makeCringer';

export default function apply(
  input: string,
  mode: string,
  ignoreSpaces: boolean,
  spacesToAdd: number
): string {
  if (mode === 'all-caps') input = input.toUpperCase();
  else if (mode === 'all-low') input = input.toLowerCase();
  else if (mode === 'classic') {
    if (ignoreSpaces) input = makeCringeNoSpaces(input);
    else input = makeCringeClassic(input);
  } else if (mode === 'inverse') {
    if (ignoreSpaces) input = makeCringeNoSpacesInverse(input);
    else input = makeCringeInverse(input);
  }
  if (spacesToAdd !== 0) input = addSpaces(input, spacesToAdd);
  return input;
}
