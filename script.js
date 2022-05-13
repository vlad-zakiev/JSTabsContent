let tabNav = [...document.querySelectorAll('.tabs-navigation .tab')];
let tabContent = [...document.querySelectorAll('.tab-content div')];;
console.log(tabContent);
tabNav.forEach(element=> {
    element.addEventListener('click',(element)=>{
        tabNav.forEach(element=>{
            element.classList.remove('active')
        })
        element.target.classList.add('active');

        tabContent.forEach(div=>{
            div.style.display='none'
        })
        document.querySelector(element.target.dataset.content).style.display='block';
    })
})
