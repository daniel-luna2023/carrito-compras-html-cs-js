const openModal = document.querySelector('.nav__link')
const Modal = document.querySelector('.modal')
const closeModal = document.querySelector ('.modal__close')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    Modal.classList.add ('modal--show')
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    Modal.classList.remove ('modal--show')
})







export default openModal