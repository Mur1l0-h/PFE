const stories = document.getElementById('stories-container');

stories.addEventListener('wheel', (evt) => {
    evt.preventDefault(); 
    stories.scrollLeft += evt.deltaY; 
});

const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } 
        else if (video.webkitRequestFullscreen) { 
            video.webkitRequestFullscreen();
        } 
        else if (video.msRequestFullscreen) { 
            video.msRequestFullscreen();
        }
    });
});

const curtidas = document.querySelectorAll('.bi-heart');

curtidas.forEach(curtida => {
    
    curtida.addEventListener('click', () => {
        
        curtida.classList.toggle('bi-heart');
        curtida.classList.toggle('bi-heart-fill');
        
        curtida.classList.toggle('text-danger');
    });
});


const commentModalElement = document.getElementById('commentModal');
const commentModal = new bootstrap.Modal(commentModalElement);

const commentInput = document.getElementById('commentInput');
const submitCommentBtn = document.getElementById('submitCommentBtn');

let activeDescriptionContainer = null;

const chatIcons = document.querySelectorAll('.bi-chat');

chatIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const currentPost = event.target.closest('.PostIndiv');
        
        activeDescriptionContainer = currentPost.querySelector('.Descricao');
        
        commentInput.value = '';
        
        commentModal.show();
    });
});

submitCommentBtn.addEventListener('click', () => {
    const commentText = commentInput.value.trim();

    if (commentText !== '' && activeDescriptionContainer !== null) {
        
        const newComment = document.createElement('p');
        
        newComment.innerHTML = `<strong>Usuário</strong> ${commentText}`;
        
        activeDescriptionContainer.appendChild(newComment);
        
        commentModal.hide();
    }
});

commentInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        submitCommentBtn.click();
    }
});



