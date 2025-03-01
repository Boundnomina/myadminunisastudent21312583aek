
// script.js
function toggleMenu(element) {
    element.classList.toggle('active');
}

function toggleStudyUnits() {
    const dropdown = document.querySelector('.study-units-dropdown');
    const arrow = document.querySelector('.study-units-arrow');

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        arrow.classList.remove('up');
    } else {
        dropdown.classList.add('show');
        arrow.classList.add('up');
    }
}

function showLoadingThenMessage() {
    const loadingMessage = document.getElementById('loadingMessage');
    const emailMessage = document.getElementById('emailMessage');

    // Show the loading message
    loadingMessage.style.display = 'block';
    emailMessage.style.display = 'none'; // Make sure that the email message is hidden

    // Simulate a delay (e.g., email sending process)
    setTimeout(() => {
        // Hide the loading message
        loadingMessage.style.display = 'none';
        // Show the email confirmation message
        emailMessage.style.display = 'block';
    }, 3000); // 3 seconds delay (adjust as needed)
}

function reloadPage() {
    location.reload();
}

function showEmailMessage() {
    document.getElementById('emailMessage').style.display = 'block';
    setTimeout(function () {
        document.getElementById('emailMessage').style.display = 'none';
    }, 4000);
}
const menuButton = document.querySelector('#menu-button');
const sideMenu = document.querySelector('#sideMenu')
if (menuButton) {
    menuButton.addEventListener('click', function () {
        console.log('Menu button clicked');
        sideMenu.classList.toggle('show');
        menuButton.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const grayBars = document.querySelectorAll('.gray-bar');
    grayBars.forEach(function (bar, index) {
        if (index === 2) {
            bar.addEventListener('click', showLoadingThenMessage);
        } else {
            bar.addEventListener('click', showEmailMessage);
        }
    });


    const homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default scrolling behavior
        document.getElementById('emailMessage').style.display = 'none';
    });

    //Side menu links
    document.getElementById('student-admin-link').addEventListener('click', function(event) {
        event.stopPropagation();
        window.open('http://vghvycyccchch.nnicom', '_blank');
    });
    document.getElementById('study-materials-link').addEventListener('click', function(event) {
        event.stopPropagation();
        window.open('http://myadmin.unisa.ac.za/student/portal/#!/iframe?tool_id=4abbc985-d413-40b8-bc62-f4f3b7737e71&tool_tittle=', '_blank');
    });
    document.getElementById('student-finance-link').addEventListener('click', function(event) {
        event.stopPropagation();
        window.open('http://myadmin.unisa.ac.za/student/portal/creditcard-payment-fnb-app/quallnput', '_blank');
    });
    document.getElementById('assessment-admin-link').addEventListener('click', function(event) {
        event.stopPropagation();
        window.open('#', '_blank');
    });
    document.getElementById('teaching-practice-link').addEventListener('click', function(event) {
        event.stopPropagation();
        window.open('http://myadmin.unisa.ac.za/student/portal/#!/tpuonlineforms', '_blank');
    });
    document.getElementById('password-management-link').addEventListener('click', function(event) {
        event.stopPropagation();
        window.open('http://microsoft.com', '_blank');
    });

    // Arrow click handling
    const arrows = document.querySelectorAll('.side-menu .arrow');
    arrows.forEach(function (arrow) {
        arrow.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the parent <a> from being triggered.
            const link = arrow.parentElement.getAttribute('href');
            if (link) {
                window.open(link, '_blank'); // Open in new tab
            }
        });
    });
});