const navigationItems = document.querySelectorAll('.navigation li');
const sliderBar = document.querySelector('.slider-bar');

navigationItems.forEach(item => {
    item.addEventListener('click', () => {
        navigationItems.forEach(navItem => navItem.classList.remove('active'));
        
        item.classList.add('active');
        sliderBar.style.width = `${item.offsetWidth}px`; 
        sliderBar.style.transform = `translateX(${item.offsetLeft}px)`; 
        document.querySelector('.section-container').classList.toggle('active');
    });
});

document.getElementById('signupButton').addEventListener('click', function() {
    $('#signupModal').modal('show');
});


document.getElementById('redirectJoinGroup').addEventListener('click', function(event) {
    event.preventDefault();
    $('#joinGroupModal').modal('show');
});



