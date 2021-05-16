const hiddenFace = document.getElementById('hidden')
const booFace = document.getElementById('boo')


hiddenFace.addEventListener('mousedown',() => {
    hiddenFace.classList.remove('active');
    booFace.classList.add('active');
});

booFace.addEventListener('mouseup',() => {
    booFace.classList.remove('active');
    hiddenFace.classList.add('active');
});