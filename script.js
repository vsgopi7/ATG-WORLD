const navigationItems = document.querySelectorAll('.navigation li');
const sliderBar = document.querySelector('.slider-bar');

navigationItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        navigationItems.forEach(navItem => navItem.classList.remove('active'));
        
        // Add active class to the clicked item
        item.classList.add('active');

        // Move slider bar
        sliderBar.style.width = `${item.offsetWidth}px`; // Set width based on item width
        sliderBar.style.transform = `translateX(${item.offsetLeft}px)`; // Move to item's position

        // Toggle active class for section container
        document.querySelector('.section-container').classList.toggle('active');
    });
});

// Function to show signupModal
document.getElementById('signupButton').addEventListener('click', function() {
    $('#signupModal').modal('show');
});

// Function to show joinGroupModal
document.getElementById('redirectJoinGroup').addEventListener('click', function(event) {
    event.preventDefault();
    $('#joinGroupModal').modal('show');
});



