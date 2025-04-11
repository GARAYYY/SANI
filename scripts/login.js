document.getElementById('loginButton').addEventListener('click', function (event) {
    event.preventDefault();
    validarLogin();
});

function validarLogin() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const usuarioValido = data.find(user => user.usuario === usuario && user.contrasena === contrasena);
            if (usuarioValido) {
                window.location.href = '/paginas/main.html';
                const token = Math.random(1000000000000) * 1000000000000;
                sessionStorage.setItem('token', token)
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        })
        .catch(error => {
            console.error('Error al cargar los datos de usuarios:', error);
        });
}

function getToken() {
    const token = sessionStorage.getItem('token');
    if (!token) {
        alert('No estás autenticado!');
        window.location.href = 'index.html';
    }
}
