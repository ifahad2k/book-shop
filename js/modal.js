// const loginBtn = document.getElementById('btn-login')
loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    form1Container.style.display = 'block';
    form2Container.style.display = 'none';
})

SignUpBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    form2Container.style.display = 'block';
    form1Container.style.display = 'none';
})

for (const button of modalCloseButtons){
    button.addEventListener('click', ()=>{
        form1Container.style.display = 'none';
        form2Container.style.display = 'none';
        modal.style.display = 'none';
    })
}