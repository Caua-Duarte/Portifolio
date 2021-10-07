function startModal(showHard){
    const modal = document.getElementById(showHard);
    if(modal){
        modal.classList.add('show-hard');
        modal.addEventListener('click', (e) => {
            if(e.target.id == showHard || e.target.className == 'btn-modal'){
                modal.classList.remove('show-hard');
            }
        });
    }
}

const skillHard = document.querySelector('.list-hard')
skillHard.addEventListener('click', () => startModal('modal-hard'));

function startModal(showSoft){
    const modal = document.getElementById(showSoft);
    if(modal){
        modal.classList.add('show-soft');
        modal.addEventListener('click', (e) => {
            if(e.target.id == showSoft || e.target.className == 'btn-modal'){
                modal.classList.remove('show-soft');
            }
        });
    }
}

const skillSoft = document.querySelector('.list-soft')
skillSoft.addEventListener('click', () => startModal('modal-soft'));
