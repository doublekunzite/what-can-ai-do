// Prompt Builder - Fixed Script
(function() {
    // Hide all conversation flows on load
    const flows = document.querySelectorAll('.conversation-flow');
    flows.forEach(flow => flow.style.display = 'none');
    
    // Show study session by default (only once)
    const defaultFlow = document.getElementById('study-session-flow');
    if (defaultFlow) {
        defaultFlow.style.display = 'block';
        defaultFlow.classList.add('active');
    }
    
    // Prompt selector button handler
    const promptButtons = document.querySelectorAll('.prompt-btn');
    promptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetFlowId = this.getAttribute('data-flow');
            
            // Hide all flows
            flows.forEach(flow => {
                flow.style.display = 'none';
                flow.classList.remove('active');
            });
            
            // Remove active class from all buttons
            promptButtons.forEach(btn => btn.classList.remove('active'));
            
            // Show selected flow
            const targetFlow = document.getElementById(targetFlowId);
            if (targetFlow) {
                targetFlow.style.display = 'block';
                targetFlow.classList.add('active');
            }
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    // Make step boxes editable
    const editableBoxes = document.querySelectorAll('.step-box.editable .step-content');
    editableBoxes.forEach(box => {
        box.setAttribute('contenteditable', 'true');
        box.addEventListener('focus', function() {
            this.parentElement.style.borderColor = 'var(--nav-link-color)';
        });
        box.addEventListener('blur', function() {
            this.parentElement.style.borderColor = 'var(--border-color)';
        });
    });
    
    // Copy button functionality
    const copyButtons = document.querySelectorAll('.btn-copy');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const stepContent = this.closest('.step-box').querySelector('.step-content').textContent;
            navigator.clipboard.writeText(stepContent).then(() => {
                // Visual feedback
                const originalText = this.textContent;
                this.textContent = '✓ Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1500);
            });
        });
    });
    
    // Remove step functionality
    const removeButtons = document.querySelectorAll('.btn-x');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const stepBox = this.closest('.step-box');
            stepBox.style.transition = 'opacity 0.2s';
            stepBox.style.opacity = '0';
            setTimeout(() => {
                stepBox.remove();
            }, 200);
        });
    });
})();