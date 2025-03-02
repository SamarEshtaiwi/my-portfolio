function showContent(sectionId) {
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

document.getElementById("upload-photo").addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.querySelector(".profile-picture").src = e.target.result;
    }
    reader.readAsDataURL(this.files[0]);
});

document.getElementById('save-button').addEventListener('click', function() {
    alert('Changes have been saved');
});