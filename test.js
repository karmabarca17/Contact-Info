 // Initialize AOS
        AOS.init({
        duration: 800, // Animation duration
        once: true, // Whether animation should happen only once
        });
    
        // Feedback modal logic
        document.addEventListener('DOMContentLoaded', function() {
        var feedbackBtn = document.getElementById('feedbackBtn');
        var feedbackBox = document.getElementById('feedbackBox');
        var closeBtn = document.getElementById('closeBtn');
    
        feedbackBtn.onclick = function() {
            feedbackBox.classList.toggle('hidden');
            feedbackBtn.classList.toggle('hidden');
        };
    
        closeBtn.onclick = function() {
            feedbackBox.classList.add('hidden');
            feedbackBtn.classList.remove('hidden');
        };
        });