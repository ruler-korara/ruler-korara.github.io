const navItems = document.querySelectorAll('.nav-item');
const titleBar = document.getElementById('title-bar');
const textLines = [
  document.getElementById('line1'),
  document.getElementById('line2'),
  document.getElementById('line3'),
  document.getElementById('line4'),
  document.getElementById('line5'),
];

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const newTitle = item.getAttribute('data-title');
    const lines = item.getAttribute('data-lines').split('|');

    titleBar.textContent = newTitle;
    lines.forEach((line, index) => {
      if (textLines[index]) {
          textLines[index].textContent = line;
      }
    });
  });
});
