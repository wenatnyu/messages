// Function to display messages
function displayMessages(messages) {
    const container = document.getElementById('messages-container');
    
    if (!messages || messages.length === 0) {
        container.innerHTML = '<div class="no-messages">还没有祝福，快来提交第一个吧！</div>';
        return;
    }
    
    let html = '';
    messages.forEach(message => {
        html += `
            <div class="message-card">
                <div class="message-header">
                    <span class="message-author">${message.author}</span>
                    <span class="message-date">${message.date}</span>
                </div>
                <div class="message-content">
                    ${message.content}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Function to fetch messages from server
async function fetchMessages() {
    try {
        const response = await fetch('/api/messages');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const messages = await response.json();
        
        // Display messages
        displayMessages(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        document.getElementById('messages-container').innerHTML = 
            '<div class="no-messages">加载失败，请稍后再试...</div>';
    }
}

// Load messages when page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchMessages();
});