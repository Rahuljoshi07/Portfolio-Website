// Simple and Reliable Project Filtering
$(document).ready(function() {
    
    // Filter functionality
    $('.filter').click(function(e) {
        e.preventDefault();
        
        // Remove active class from all filters
        $('.filter').removeClass('active');
        
        // Add active class to clicked filter
        $(this).addClass('active');
        
        var filterValue = $(this).attr('data-filter');
        
        // Show/hide projects based on filter
        if (filterValue === 'all') {
            $('.mix').fadeIn(300);
        } else {
            // Hide all projects first
            $('.mix').fadeOut(300);
            
            // Show only matching projects after a short delay
            setTimeout(function() {
                $('.mix' + filterValue).fadeIn(300);
            }, 350);
        }
    });
    
    // Initialize with 'all' showing
    $('.mix').show();
    
    // Ensure uniform card heights
    function makeCardsUniform() {
        var cards = $('.project-card');
        var maxHeight = 0;
        
        // Reset heights first
        cards.css('height', 'auto');
        
        // Find maximum height
        cards.each(function() {
            var cardHeight = $(this).outerHeight();
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
        });
        
        // Set all cards to maximum height
        cards.css('height', maxHeight + 'px');
    }
    
    // Apply uniform heights
    setTimeout(makeCardsUniform, 100);
    
    // Reapply on window resize
    $(window).resize(function() {
        setTimeout(makeCardsUniform, 200);
    });
    
});
