let elButton = document.querySelector('button')

elButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow'
    elButton.style.color = 'black'
    elButton.style.borderColor = 'black'
})


elButton.addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'green'
})