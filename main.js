window.addEventListener("load", () => {
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');

    const title = document.querySelector('.title')
    const notebook = document.querySelector('.notebook')
    const purchaseButton = document.querySelector('.purchase')
    const pricesButton = document.querySelector('.prices')


    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
        let transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
        card.style.transform = transform
    });

    container.addEventListener('mouseleave', (e) => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;

        title.style.transform = 'translateZ(0px)'
        notebook.style.transform = 'translateZ(0px) scale(1)'
        purchaseButton.style.transform = 'translateZ(0px)'
        pricesButton.style.transform = 'translateZ(0px)'
    });
    container.addEventListener('mouseenter', (e) => {
        card.style.transition = "none";

        title.style.transform = 'translateZ(40px)'
        notebook.style.transform = 'translateZ(40px) scale(1.2)'
        purchaseButton.style.transform = 'translateZ(40px)'
        pricesButton.style.transform = 'translateZ(40px)'
    });


});
