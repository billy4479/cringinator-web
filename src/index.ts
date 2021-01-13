import apply from './apply';
import copyResult from './copyResult';

const input = document.getElementById('input') as HTMLTextAreaElement;
const output = document.getElementById('output') as HTMLParagraphElement;
const spacesToAdd = document.getElementById(
  'spaces-to-add'
) as HTMLInputElement;
const addSpaces = document.getElementById('add-spaces') as HTMLInputElement;
const modes = document.querySelectorAll('input[type=radio]');
const ignoreSpaces = document.getElementById(
  'ignore-spaces'
) as HTMLInputElement;

function displayResult() {
  let selectedMode = '';
  modes.forEach((e) => {
    const element = e as HTMLInputElement;
    if (element.checked) selectedMode = element.value;
  });
  selectedMode = selectedMode || 'classic';

  const spacesToAddN = parseInt(spacesToAdd.value);
  const doIgnoreSpaces = ignoreSpaces.checked;
  const useSpaces = addSpaces.checked;
  spacesToAdd.disabled = !useSpaces;

  output.innerText = apply(
    input?.value,
    selectedMode,
    doIgnoreSpaces,
    useSpaces ? spacesToAddN : 0
  );
}

input?.addEventListener('keyup', displayResult);
spacesToAdd?.addEventListener('change', displayResult);
addSpaces?.addEventListener('change', displayResult);
ignoreSpaces?.addEventListener('change', displayResult);
modes.forEach((e) => {
  e.addEventListener('change', displayResult);
});

copyResult(output);
