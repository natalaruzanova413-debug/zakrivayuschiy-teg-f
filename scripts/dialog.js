const saveButton = document.querySelector('.footer__save-button');
const dialog = document.querySelector('#saveDialog');

saveButton.addEventListener('click', () => {
  dialog.showModal(); 
});