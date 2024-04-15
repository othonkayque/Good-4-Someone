const btnOptions  = document.querySelector('.btn-options')
const btnSubmit  = document.querySelector('.btn-submit')
const sidebarMenu  = document.querySelector('#sidebar')
const msgSended  = document.querySelector('.msg-sended')

const sidebarHistoryBody  = document.querySelector('.sidebar-history');
const sidebarHistory = document.querySelector('.sidebar-history');
const btnHistory = document.querySelector('.btn-history');


// functions 


function sidebarHistoryShow() {
    let funcCall = false;
    if( sidebarHistory.classList.contains('sidebar-history-anim') && funcCall === false ) {
        funcCall = true;
        sidebarHistory.classList.remove('sidebar-history-anim')
        sidebarHistory.classList.add('sidebar-history-anim-out')
        setTimeout(() => {
            sidebarHistory.classList.remove('d-flex');
            sidebarHistory.classList.add('d-none');        
        }, 730);
    } else {
        funcCall = false;
        sidebarHistory.classList.remove('d-none');
        sidebarHistory.classList.add('d-flex');
        sidebarHistory.classList.remove('sidebar-history-anim-out')
        sidebarHistory.classList.add('sidebar-history-anim')
        moreOptionsShow()
    }
}

function notify() {
    let funcCall = false;
    let msgBox  = document.querySelector('#msg-box').value
    if ( msgBox === "" && funcCall === false ) {

        funcCall = true;
        msgSended.classList.add('alert-sended');
        msgSended.classList.remove('d-none');
        setTimeout(() => {
            msgSended.classList.remove('alert-sended');
            msgSended.classList.add('alert-sended-out');
            setTimeout(() => {
                msgSended.classList.add('d-none');
                msgSended.classList.remove('alert-sended-out');            
                funcCall = false;
            }, 3700);
        }, 1000);

    } else {
        console.log('Message sended')
    }
}

function moreOptionsShow() {
    if( sidebarMenu.classList.contains('sidebar-anim') ) {
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

//listeners 


btnSubmit.addEventListener('click', () => {
    notify()
    setTimeout(() => {
        document.querySelector('#msg-box').value = '';        
    }, 500);
})

btnOptions.addEventListener('click', (e) => {
    e.preventDefault();
    moreOptionsShow()
})

btnHistory.addEventListener('click', (e) => {
    e.preventDefault();
    sidebarHistoryShow()
})

sidebarHistoryBody.addEventListener('click', () => {
    sidebarHistory.classList.add('sidebar-history-anim-out')
    sidebarHistory.classList.remove('sidebar-history-anim')
    setTimeout(() => {
        sidebarHistory.classList.remove('d-flex');
        sidebarHistory.classList.add('d-none');        
    }, 600);
})