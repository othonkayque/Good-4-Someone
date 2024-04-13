const msgBox  = document.querySelector('#msg-box').value
const btnOptions  = document.querySelector('.btn-options')
const btnSubmit  = document.querySelector('.btn-submit')
const sidebarMenu  = document.querySelector('#sidebar')

function teste() {
    if(sidebarMenu.classList.contains('sidebar-anim')) {
        sidebarMenu.classList.remove('sidebar-anim')
        sidebarMenu.classList.add('sidebar-anim-out')
        setTimeout(() => {
            sidebarMenu.classList.remove('d-flex');
            sidebarMenu.classList.add('d-none');            
        }, 730);
    } else {
        sidebarMenu.classList.remove('sidebar-anim-out')
        sidebarMenu.classList.add('sidebar-anim')
        sidebarMenu.classList.remove('d-none');
        sidebarMenu.classList.add('d-flex');
    }
}

btnSubmit.addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('#msg-box').value = '';        
    }, 500);
})

btnOptions.addEventListener('click', (e) => {
    e.preventDefault();
    teste()
 
})