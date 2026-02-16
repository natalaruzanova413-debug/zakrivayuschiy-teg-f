const saveButton = document.querySelector('.content__save-button');
const dialog = document.querySelector('#saveDialog');

saveButton.addEventListener('click', () => {
  dialog.showModal(); 
});