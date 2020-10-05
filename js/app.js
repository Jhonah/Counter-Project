const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const counter = document.querySelector('#counter');

let index = 1;
index = index + 1;
counter.textContent = index;

colorChange();

function colorChange() {
    if (index >= 1) {
        counter.style.color = 'green';
    }
    else if (index <= -1) {
        counter.style.color = 'red';
    }
    else {
        counter.style.color = '#333333';
    }
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        index = index - 1;
        counter.textContent = index;
        //alert('Событие гроз');
        colorChange();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', {
        handleEvent: function (event) {
            index = index + 1;
            counter.textContent = index;
            //alert('Событие handler');
            colorChange();
        }
    });
}