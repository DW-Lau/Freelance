const btnPara= document.querySelector('.btn--para');
const parametresIcones = document.querySelector('.parametres--icones');

function togglePara() {
    parametresIcones.classList.toggle('hidden');
}

btnPara.addEventListener('click', togglePara);