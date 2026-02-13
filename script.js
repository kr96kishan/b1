let chapter = 1;

document.getElementById('nextBtn').addEventListener('click', function() {
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const btn = document.getElementById('nextBtn');

    if (chapter === 1) {
        title.innerText = "The Story So Far";
        message.innerText = "Every moment spent with you is a favorite memory of mine.";
        btn.innerText = "See the Surprise";
        chapter = 2;
    } else {
        title.innerText = "Happy Birthday!";
        message.innerText = "You deserve the world today and every day. ❤️";
        btn.style.display = "none";
    }
});