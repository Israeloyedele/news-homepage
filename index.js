const burger = document.querySelector (".navigation");
const nav = document.querySelector('.top-links');
const navContainer = document.querySelector('.top-links-container');
const btn = document.querySelector('button');


burger.addEventListener('click', e => {
    burger.classList.toggle('open');
    if (burger.classList.contains('open')){
        nav.classList.add('active')
        navContainer.classList.add('active')
        
    } else {
        nav.classList.remove('active')
        navContainer.classList.remove('active');
    }
});


btn.addEventListener('click', e => {
        alert("You're being taken to a page where you can read more :)")
    });
