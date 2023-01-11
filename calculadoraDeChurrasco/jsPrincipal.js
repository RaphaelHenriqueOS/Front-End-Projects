var botaoEntrar = document.querySelector('div#botaoEntrar');
    botaoEntrar.addEventListener('mouseenter', () => {
        botaoEntrar.style.cursor = 'pointer'
        botaoEntrar.style.opacity = '1';
    })

    botaoEntrar.addEventListener('click', () => {
        window.location.assign('segunda.html');
    })

    botaoEntrar.addEventListener('mouseout', () => {
        botaoEntrar.style.opacity = '0.5';
    })