
// mengsederhakan code

const input = document.querySelector('.input');
const ul = document.querySelector('.list ul');
const tombol = document.querySelector('.button');


function tambahLi(){
    // awal nambah elemen
    if (input.value !== ''){
    ul.innerHTML += `<li><input type="checkbox"><span>${input.value}</span><button>X</button></li>`
    for (i=0; i<ul.childElementCount; i++){
        localStorage.setItem(input.value, `<li><input type="checkbox"><span>${input.value}</span><button>X</button></li>`);
    };
    input.value = '';
    input.focus();
    };
    // akhir nambah elemen
    
    // awal checkbox
    const checkBox = document.querySelectorAll('ul li input');
    const tulisan = document.querySelectorAll('ul li span');
    if (checkBox !== undefined){
        for (i=0; i<checkBox.length; i++){
            const checkBoxI = checkBox[i];
            const tulisanI = tulisan[i];
            const index = i;
            checkBoxI.addEventListener('change', function(){
                tulisanI.classList.toggle('coret');
                localStorage.setItem(index, 'coret');
            });
        };
    };
    // akhir checkbox
    
    // awal remove
    const remove = document.querySelectorAll('ul li button');
    const li = document.querySelectorAll('ul li');
    if (remove !== undefined){
        for (i=0; i<remove.length; i++){
            const removeI = remove[i];
            const liI = li[i];
            const tulisanI = tulisan[i];
            removeI.addEventListener('click', function(){
                liI.remove();
                localStorage.removeItem(tulisanI.innerHTML);
            });
        };
    };
    // akhir remove
};

    // awal cek element
    if (localStorage.length !== 0){ 
        for (i=0; i<localStorage.length;i++){
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            if (value === 'coret'){
                continue;
            } else {
                ul.innerHTML += value;
            };
        };
        const checkBox = document.querySelectorAll('ul li input');
        const remove = document.querySelectorAll('ul li button');
        const tulisan = document.querySelectorAll('ul li span');
        const li = document.querySelectorAll('ul li');
        for (let i = 0; i<checkBox.length; i++){
            checkBox[i].addEventListener('change', function(){
                tulisan[i].classList.toggle('coret');
            });
            remove[i].addEventListener('click', function(){
                li[i].remove();
                localStorage.removeItem(tulisan[i].innerHTML);
            });
        };
    };
    // akhir cek elemen

    // awal cek checkbox
    // const tulisan = document.querySelectorAll('ul li span');
    // const checkBox  = document.querySelectorAll('ul li input');

    // if (tulisan.length !== 0){
    //     for (i=0; i<localStorage.length; i++){
    //         const coret = localStorage.getItem(i);
    //         const checkBoxI = checkBox[i];
    //         if (coret === 'coret'){
    //             tulisan[i].classList.add('coret');
    //             checkBoxI.value = 'on';
    //         };
    //     };
    // };
    // akhir cek checkbox



    // diakhiri pada 17 okt 2023 dengan masih ada 1 kekurangan yang tidak mampu difix, yaitu merekam data checkboxnya, suatu hari bakal balik lagi dengan lebih banyak ilmu tentunya untuk menyelesaikan kekurangan.



































