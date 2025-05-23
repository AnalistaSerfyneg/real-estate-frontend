// Header Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    const scrollThreshold = 20;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navigation = document.querySelector('.main-navigation');

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});

// Property Search Form
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.property-search-form form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const location = searchForm.querySelector('input[name="location"]').value;
            const propertyType = searchForm.querySelector('select[name="property_type"]').value;
            const priceRange = searchForm.querySelector('select[name="price_range"]').value;
            
            // Add validation if needed
            if (!location && !propertyType && !priceRange) {
                e.preventDefault();
                alert('Please select at least one search criteria');
            }
        });
    }
});