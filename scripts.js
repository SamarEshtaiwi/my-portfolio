document.getElementById('setting-link').addEventListener('click', function (e) {
    e.preventDefault();
    showContent('setting-page');
});

function showContent(pageId) {
    var pages = document.querySelectorAll('.content');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function showProfile(profileId) {
    showContent('profile-details');

    var profiles = {
        'Alanoud': {
            name: "Eng.Alanoud",
            email: "Alanoud@gmail.com",
            image: "path/to/alanoud-image.jpg"
        },
        'Samar': {
            name: "Eng.Samar",
            email: "Samar@gmail.com",
            image: "path/to/samar-image.jpg"
        },
        'Abdulla': {
            name: "Eng.Abdulla",
            email: "Abdulla@gmail.com",
            image: "path/to/abdulla-image.jpg"
        },
        'Zainab': {
            name: "Eng.Zainab",
            email: "Zainab@gmail.com",
            image: "path/to/zainab-image.jpg"
        }
    };

    var profile = profiles[profileId];

    if (profile) {
        document.getElementById('profile-name').textContent = "Name: " + profile.name;
        document.getElementById('profile-email').textContent = "Email: " + profile.email;
        document.getElementById('profile-picture').src = profile.image;
    }
}

function goBack() {
    showContent('setting-page');
}

function showContent(sectionId) {
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}