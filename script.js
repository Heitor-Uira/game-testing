function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
  event
  .currentTarget
  .style
  .backgroundColor = '#d6665e';
}
function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event
  .dataTransfer
  .clearData();
}
setTimeout(function() {
  window.location.href = "https://heitor-uira.github.io/Match/index.html"
}, 10000)
