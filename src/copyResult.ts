export default (output: HTMLParagraphElement) => {
  output.addEventListener('click', async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(output.innerText);
      } catch (error) {
        const e = document.createElement('p');
        e.innerText = `An error occurred: ${error}`;
        output.appendChild(e);
      }
    }
  });
};
