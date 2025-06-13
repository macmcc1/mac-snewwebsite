document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Opening ${link.href}`);
    // No need for preventDefault or window.open
  });
});
