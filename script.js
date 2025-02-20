document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // يمكنك إضافة أي تحقق إضافي هنا إذا لزم الأمر
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);

        alert('Signup successful!');
    });
});