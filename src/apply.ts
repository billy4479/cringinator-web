import {
  addSpaces,
  makeCringeClassic,
  makeCringeInverse,
  makeCringeNoSpaces,
  makeCringeNoSpacesInverse,
} from './makeCringer';
import Props from './props';

export default function apply(input: string, props: Props): string {
  if (props.allCaps) input = input.toUpperCase();
  if (props.allLow) input = input.toLowerCase();
  if (!props.allCaps && !props.allLow) {
    if (props.inverse) {
      if (props.ignoreSpaces) input = makeCringeNoSpacesInverse(input);
      else input = makeCringeInverse(input);
    } else {
      if (props.ignoreSpaces) input = makeCringeNoSpaces(input);
      else input = makeCringeClassic(input);
    }
  }
  if (props.spacesToAdd !== 0) input = addSpaces(input, props.spacesToAdd);
  return input;
}
