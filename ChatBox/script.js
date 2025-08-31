// Select DOM elements
const sendBtn = document.getElementById('send-btn'); // Send button [works]
const messageInput = document.getElementById('message-input'); // Input field [works]
const chatBox = document.getElementById('chat-box'); // Chat messages container [works]

// Function to add a new message
function addMessage() {
    const messageText = messageInput.value.trim(); // Get input text [works]

    if (messageText === '') return; // Do nothing if input is empty [works]

    // Create a new message div
    const messageDiv = document.createElement('div'); // Create div [works]
    messageDiv.classList.add('message', 'sender'); // Add classes [works]
    messageDiv.innerHTML = `<p>${messageText}</p>`; // Set message text [works]

    chatBox.appendChild(messageDiv); // Add message to chat [works]
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom [works]

    messageInput.value = ''; // Clear input field [works]
}

// Add click event to Send button
sendBtn.addEventListener('click', addMessage); // On click [works]

// Allow Enter key to send message
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addMessage(); // Send message on Enter [works]
    }
});
