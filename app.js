let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function () {
    if (inp.value.trim() !== '') { 
        let li = document.createElement('li');
        let dlt = document.createElement('button');
        li.innerText = inp.value;
        li.style.justifyContent = 'space-between'; // Align items
        li.style.alignItems = 'center';
        li.style.marginBottom = '10px';

        let span = document.createElement('span'); // To hold the list item text
        span.innerText = inp.value;
        span.style.marginRight = '20px'; // Add space between text and button
        dlt.innerText = 'Delete';
        dlt.classList.add('Delete');
        li.appendChild(dlt);
        ul.appendChild(li);
        dlt.style.background = 'white';
        dlt.style.color = 'black';
        dlt.style.height = '30px';
        dlt.style.width = '70px';
        dlt.style.borderRadius = '10px';
        dlt.style.display = 'block';
        dlt.addEventListener('click', function () {
            ul.removeChild(li);
        });
        inp.value = ''; 
    }
    btn.disabled = true;
});

inp.addEventListener('input', function () {
    btn.disabled = inp.value.trim() === '';
});
