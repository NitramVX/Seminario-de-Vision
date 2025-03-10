    function toTop() {
        const scrollDuration = 100; // Duration in milliseconds
        const scrollStep = -window.scrollY / (scrollDuration / 5);
        const scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep, 'smooth');
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };
