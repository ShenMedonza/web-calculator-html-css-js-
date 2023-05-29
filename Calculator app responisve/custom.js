function insertion(num)
{
    const show = document.getElementById("display");
    show.value = show.value + num;
}

function clean()
{
    const clear = document.getElementById("display");
    clear.value = " ";
}

function equal()
{
    const total = document.getElementById("display");
    total.value = eval(total.value);
}

document.querySelector('.darkmode-toggle').addEventListener('click', () => 
{
    document.body.classList.toggle('darkmode');

})

document.querySelector('.lightmode-toggle').addEventListener('click', () => 
{
    document.body.classList.toggle('darkmode');
    
})