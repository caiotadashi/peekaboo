const hiddenFace = document.getElementById('hidden')
const booFace = document.getElementById('boo')


hiddenFace.addEventListener('mousedown',() => {
    hiddenFace.classList.remove('active');
    booFace.classList.add('active');
    console.log('click');
});

booFace.addEventListener('mouseup',() => {
    booFace.classList.remove('active');
    hiddenFace.classList.add('active');
    console.log('unclick');
});