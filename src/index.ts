import apply from './apply';
import Props from './props';

const input = document.getElementById('input') as HTMLTextAreaElement;
const output = document.getElementById('output') as HTMLParagraphElement;
const spacesToAdd = document.getElementById(
  'spaces-to-add'
) as HTMLInputElement;
const mode = document.querySelectorAll('input[type="checkbox"]');

function displayResult(event: Event) {
  let inverse = (document.getElementById('inverse') as HTMLInputElement)
    .checked;
  let allCaps = (document.getElementById('all-caps') as HTMLInputElement)
    .checked;
  let allLow = (document.getElementById('all-low') as HTMLInputElement).checked;
  let ignoreSpaces = (document.getElementById(
    'ignore-spaces'
  ) as HTMLInputElement).checked;
  let spacesToAdd = 0;

  const target = event.target as HTMLInputElement;
  switch (target.id) {
    case 'inverse':
      if (target.checked) {
        // Disable all caps if enabled
        if (allCaps) {
          allCaps = false;
          (document.getElementById(
            'all-caps'
          ) as HTMLInputElement).checked = false;
        }
        // Disable all low if enabled
        if (allLow) {
          allLow = false;
          (document.getElementById(
            'all-low'
          ) as HTMLInputElement).checked = false;
        }
      }
      break;

    case 'all-caps':
      if (target.checked) {
        if (inverse) {
          inverse = false;
          (document.getElementById(
            'inverse'
          ) as HTMLInputElement).checked = false;
        }
        if (allLow) {
          allLow = false;
          (document.getElementById(
            'all-low'
          ) as HTMLInputElement).checked = false;
        }
      }
      break;

    case 'all-low':
      if (target.checked) {
        if (inverse) {
          inverse = false;
          (document.getElementById(
            'inverse'
          ) as HTMLInputElement).checked = false;
        }
        if (allCaps) {
          allCaps = false;
          (document.getElementById(
            'all-caps'
          ) as HTMLInputElement).checked = false;
        }
      }
      break;

    case 'ignore-spaces':
      ignoreSpaces = target.checked;
      break;

    case 'add-spaces':
      const n = document.getElementById('spaces-to-add') as HTMLInputElement;
      n.disabled = !target.checked;
      if (target.checked) spacesToAdd = parseInt(n.value);
      else spacesToAdd = 0;

      break;

    case 'spaces-to-add':
      if (!target.disabled) spacesToAdd = parseInt(target.value);
      break;

    default:
      break;
  }

  output.innerText = apply(
    input?.value,
    new Props(inverse, ignoreSpaces, spacesToAdd, allCaps, allLow)
  );
}

input?.addEventListener('keyup', displayResult);
spacesToAdd?.addEventListener('change', (e) => {
  if (parseInt(spacesToAdd?.value) >= 0) displayResult(e);
});
mode?.forEach((e) => {
  e.addEventListener('change', displayResult);
});

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
