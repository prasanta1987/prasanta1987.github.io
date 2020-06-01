//Menu handler

const menu = document.querySelector('.menu');

menu.addEventListener('click',()=>{
    if(document.querySelector('.closebar')){
        menu.classList.remove('closebar')
    } else {
        menu.classList.add('closebar')
    }
})


//Nav Bar Observer
const intro = document.querySelector('.intro');
const nav = document.querySelector('.mynav');

const options = {
    rootMargin : '-90% 0% 0% 0%'
}

const navOsv = new IntersectionObserver((entries, navOsv)=>{
entries.forEach(entry=>{
    if(!entry.isIntersecting){
        nav.style.transition = '0.5s'
        nav.classList.add('menubg')
    } else {
        nav.classList.remove('menubg')
    }
})
},options)

navOsv.observe(intro)

//Service Observer
const service = document.querySelectorAll('.service')

const serviceOsv = new IntersectionObserver((entries,serviceOsv)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.transform = 'scale(1)';
            serviceOsv.unobserve(entry.target)
        }
    })
},{})

service.forEach(srv=>{
    serviceOsv.observe(srv)
})

//Lazy Load Images
const lazyImage = document.querySelectorAll('.lazyImage');

window.addEventListener('DOMContentLoaded',()=>{
    lazyImage.forEach(imgs=>{
        imgs.style.backgroundImage = `url('${imgs.getAttribute('data-img')}')`
    })
})
