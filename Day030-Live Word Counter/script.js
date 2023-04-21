let inputTextArea = document.getElementById('input-textarea');
let characCount = document.getElementById('charac-count');
let wordCount = document.getElementById('word-count');

inputTextArea.addEventListener('input', () => {
  characCount.textContent = inputTextArea.value.length;
  let txt = inputTextArea.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});
