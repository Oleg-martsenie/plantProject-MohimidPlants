$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('bx-x')
        $('.navbar').toggleClass('nav-toggle')
    }); 
    $(window).on('load scroll', function() {
        $('#menu').removeClass('bx-x')
        $('.navbar').removeClass('nav-toggle')
    });
});

//Adicionando os Cactos

const QS = (e) => {
    return document.querySelector(e)
}
const QSA = (e) => {
    return document.querySelectorAll(e)
}

let= cart = [];
let modalqt = 1;
let modalKey = 0;



CactusJson.map((item, index)=> {
    let cactoItem = QS('.models .cactu-item').cloneNode(true);

    cactoItem.setAttribute('data-key', index);
    cactoItem.querySelector('.cactu-item--img img').src = item.img
    cactoItem.querySelector('.cactu-item--price').innerHTML = `$ ${item.price.toFixed(2)}`;
    cactoItem.querySelector('.cactu-item--name').innerHTML = item.name;
    cactoItem.querySelector('.cactu-item--desc').innerHTML = item.decription;
   
    cactoItem.querySelector('.cactu-item a').addEventListener('click', (e)=>{
        e.preventDefault(); //Ele retira o padrão da tag 'a' de att a page
        
        let key = e.target.closest('.cactu-item').getAttribute('data-key');

        modalqt = 1;

        modalKey = key;


        QS('.cactuBig img').src = CactusJson[key].img;
        QS('.cactuInfo h1').innerHTML = CactusJson[key].name;
        QS('.cactuInfo--desc').innerHTML = CactusJson[key].decription;
        QS('.cactuInfo-actualPrice').innerHTML = `$ ${CactusJson[key].price.toFixed(2)}`;


        QS('.cactuInfo-qt').innerHTML = modalqt;


        QS('.cactuWindowArea').style.opacity = 0
        QS('.cactuWindowArea').style.display = 'flex';
        setTimeout(() => {
            QS('.cactuWindowArea').style.opacity = 1
        },200);
    });

    QS('.cactu-area').append(cactoItem);
});


//Modal's Events

function closeModal() {
    QS('.cactuWindowArea').style.opacity = 0
    setTimeout(() => {
        QS('.cactuWindowArea').style.display = 'none'
    }, 500);
}

QSA('.cactuInfo-cancelButton, .cactuInfo-cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal)
});

QS('.cactuInfo--qtmenos').addEventListener('click', () => {
    if(modalqt > 1) {
        modalqt --;
        QS('.cactuInfo-qt').innerHTML = modalqt;
    }
});

QS('.cactuInfo--qtmais').addEventListener('click', () => {
    modalqt++;
    QS('.cactuInfo-qt').innerHTML = modalqt;
});

QS(".cactuInfo-addButton").addEventListener('click', () => {


    cart.push({
        id:CactusJson[modalKey].id,
        qt:modalqt
    })

    updateCart()
    closeModal();
});

function updateCart() {
    if(cart.length > 0) {
        QS('aside').classList.add('show');
        QS('.cart').innerHTML = '';
        for(let i in cart) {
            let  cactoItem = CactusJson.find((item)=>item.id == cart[i].id)
            let cartItem = QS('.models .cactu-item').cloneNode(true);
        }

    } else {
        QS('aside').classList.remove('show');

    }
}