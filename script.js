document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-btn');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const destino = link.getAttribute('href');
            console.log(`Usuário navegando para: ${destino}`);
        });
    });
});
