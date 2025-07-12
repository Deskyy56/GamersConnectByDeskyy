const input = document.querySelector('input');
const button = document.querySelector('button');
const messages = document.querySelector('.messages');

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== '') {
    const msg = document.createElement('p');
    msg.innerHTML = `<strong>You:</strong> ${text}`;
    messages.appendChild(msg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
    if (isOwner) {
  // Add delete button to messages
}
  }
});
