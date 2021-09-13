//connect the ID tweetFrom with querySelector you found it in index.html web
const tweetForm = document.querySelector('#tweetForm');

//connect the ID tweets with querySelector , you found it in index.html web
const tweetsContainer = document.querySelector('#tweets');


// add some events and function to (username , tweet) \!/
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

// creating 'li':username  and 'b':tweet 
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

// remove LI when clicked it
tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})

