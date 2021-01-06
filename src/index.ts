import {
  makeCringeClassic, makeCringeInverse, makeCringeNoSpaces, makeCringeNoSpacesInverse,
} from './makeCringer';

const input = document.getElementById('input') as HTMLTextAreaElement;
const output = document.getElementById('output') as HTMLParagraphElement;
const mode = document.getElementById('type') as HTMLSelectElement;

function displayResult() {
  switch (mode.selectedIndex) {
    case 0:
      output.innerText = makeCringeClassic(input.value);
      break;
    case 1:
      output.innerText = makeCringeInverse(input.value);
      break;
    case 2:
      output.innerText = makeCringeNoSpaces(input.value);
      break;
    case 3:
      output.innerText = makeCringeNoSpacesInverse(input.value);
      break;
    default:
      break;
  }
}

input?.addEventListener('keyup', displayResult);
mode?.addEventListener('change', displayResult);

output?.addEventListener('click', async () => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(output?.innerText);
    } catch (error) {
      const e = document.createElement('p');
      e.innerText = `An error occurred: ${error}`;
      output.appendChild(e);
    }
  }
});
