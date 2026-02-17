const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('#saveDialog');

saveButton.addEventListener('click', () => {
  dialog.showModal(); 
});