
const commentBar = document.querySelector('.commentOpenBarDiv');
const commentPart = document.querySelector('.thirdPagePart')

commentBar.addEventListener('click', () => {
    commentPart.classList.add('activated');
});

document.addEventListener('click', (event) => {
    if (!commentPart.contains(event.target) && !commentBar.contains(event.target)) {
        commentPart.classList.remove('activated'); // փակել
    }
});