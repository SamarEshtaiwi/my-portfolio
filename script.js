function setProgress(circleId, percentage) {
    const circle = document.getElementById(circleId);
    const radius = circle.offsetWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
}

function updateCircles() {
    setProgress('completed-circle', 84);
    setProgress('inprogress-circle', 46);
    setProgress('notstarted-circle', 13);

    document.getElementById('completed-percentage').innerText = '84%';
    document.getElementById('inprogress-percentage').innerText = '46%';
    document.getElementById('notstarted-percentage').innerText = '13%';
}

window.onload = updateCircles;
// تحديد الحاوية التي ستحتوي على النقاط
const dotsContainer = document.getElementById('project-dots');

// عدد النقاط التي نريد إضافتها
const numberOfDots = 3;

// إنشاء النقاط وإضافتها إلى الحاوية
for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
}

document.getElementById('todayScheduleButton').addEventListener('click', function() {
    alert('تم النقر على زر "Today\'s schedule"');
});
document.getElementById('seeAllButton').addEventListener('click', function() {
    alert('تم النقر على زر "See all"');
});

document.getElementById('goToDetailButton').addEventListener('click', function() {
    alert('تم النقر على زر "Go To Detail"');
});
document.getElementById('logoutButton').addEventListener('click', function() {
    alert('تم النقر على زر "Logout"');
});