function welcome() {
    alert('Welcome to Jaffna Basketball Club! Ready to take your game to the next level?');
}

function handleContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please complete every field before sending your message.');
        return false;
    }

    alert(`Thanks ${name}! Your message has been received. We will reply to ${email} soon.`);
    event.target.reset();
    return false;
}