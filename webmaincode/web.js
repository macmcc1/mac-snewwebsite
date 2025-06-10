// script.js
document.getElementById('placeholderInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const input = e.target.value;
    if (input) {
      alert(`You entered: ${input}`);
    }
  }
});