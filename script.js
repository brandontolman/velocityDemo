document.getElementById('magicButton').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = '✨ Magic happened! Your CI/CD pipeline is working! ✨';
    message.style.color = '#007acc';
});
