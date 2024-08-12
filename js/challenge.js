let counter = 0;
let isPaused = false;
let intervalID;

function startTimer() {
    intervalID = setInterval (() => {
        if (!isPaused) {
            counter++;
            document.getElementById('counter').tectContent = counter;
        }
    }, 1000);
}

startTimer();

document.getElementById('plus').addEventListener('click', () => {
    if (!isPaused) {
        counter++;
        document.getElementById('counter').tectContent = counter;
    }
});

document.getElementById('minus').addEventListener('click', () => {
    if (!isPaused) {
        counter--;
        document.getElementById('counter').textContent = counter;
    }
});

document.getElementById('heart').addEventListener('click', () => {
    if (!isPaused) {
      const likesList = document.querySelector('.likes');
      let existingLike = document.getElementById(`like-${counter}`);
      
      if (existingLike) {
        let likesCount = parseInt(existingLike.dataset.count) + 1;
        existingLike.dataset.count = likesCount;
        existingLike.textContent = `${counter} has been liked ${likesCount} times`;
      } else {
        let newLike = document.createElement('li');
        newLike.id = `like-${counter}`;
        newLike.dataset.count = 1;
        newLike.textContent = `${counter} has been liked 1 time`;
        likesList.appendChild(newLike);
      }
    }
  });

  document.getElementById('pause').addEventListener('click', () => {
    isPaused = !isPaused;
    document.getElementById('pause').textContent = isPaused ? 'resume' : 'pause';
    
    document.getElementById('plus').disabled = isPaused;
    document.getElementById('minus').disabled = isPaused;
    document.getElementById('heart').disabled = isPaused;
  });

  document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const commentText = document.getElementById('comment-input').value;
    const commentSection = document.getElementById('comments');
    
    const newComment = document.createElement('p');
    newComment.textContent = commentText;
    commentSection.appendChild(newComment);
    
    document.getElementById('comment-input').value = ''; // Clear the input field
  });
  