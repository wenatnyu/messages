// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blessing-form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate inputs
        if (!name || !message) {
            alert('请填写完整的姓名和祝福内容！');
            return;
        }
        
        // Prepare data
        const blessingData = {
            author: name,
            content: message
        };
        
        try {
            // Send to server
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blessingData)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = '提交中...';
            submitButton.disabled = true;
            
            // Wait a bit to show the loading state
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Redirect to success page
            window.location.href = 'success.html';
        } catch (error) {
            console.error('Error submitting blessing:', error);
            alert('提交失败，请稍后再试！');
            
            // Reset button
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.textContent = '提交祝福';
            submitButton.disabled = false;
        }
    });
});