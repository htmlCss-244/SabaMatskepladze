function toggleatag() {
    const aTag = document.getElementById('AllTrainer');
    const divTag = document.getElementById ('actions');

    const divTagDisplayState = divTag.style.display;

    if(divTagDisplayState ==='none' ) {
        divTag.style.display = 'flex';
        aTag.textContent = 'View Less';
    } else {
        divTag.style.display = 'none';
        aTag.textContent = 'View All'
    }
}