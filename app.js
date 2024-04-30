'use strict'

async function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    if (email === '' || senha === '') {
        alert('Preencha os campos corretamente !!!')
    }

    try {
        const responseApi = await fetch('https://back-login.vercel.app/usuarios')
        const listUsers = await responseApi.json();

        listUsers.forEach((user) => {

            console.log(user.email)
            console.log(user.senha)
            if (email === user.email && senha === user.senha) {
                alert('Usuário Logado com Sucesso !!!');
                window.location.href = '../html/home.html';
            }
        })

    } catch (error) {
        console.error(error);
    }

}
