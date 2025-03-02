document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // يمكنك إضافة أي تحقق إضافي هنا إذا لزم الأمر
        console.log('Email:', email);
        console.log('Password:', password);

        alert('Login successful!');
    });
});