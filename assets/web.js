document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Opening ${link.href}`);
  });
});
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action
    console.log(`Opening ${link.href}`);
    window.open(link.href, '_blank'); // Open in a new tab
  });
});