const dataFeatured = `[
    {
      "img_card": "./img/Card_image1.png",
      "name": "кухня #009",
      "price_card": 120000,
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image2.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image3.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image4.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image5.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
      "img_card": "./img/Card_image6.png",
      "name": "Кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image2.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image3.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image4.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image5.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
      "img_card": "./img/Card_image6.png",
      "name": "Кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image2.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image3.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image4.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image5.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
      "img_card": "./img/Card_image6.png",
      "name": "Кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image2.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image3.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image4.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
       "img_card": "./img/Card_image5.png",
      "name": "кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    },
    {
      "img_card": "./img/Card_image6.png",
      "name": "Кухня #009",
      "price_card": "120000",
      "img_logo": "./img/Logo_icon.svg"
    }
  ]`;

const product = JSON.parse(dataFeatured);
const cardsProduct = document.querySelector('.archive-portfolio-cards');
console.log(cardsProduct);


 

const cardsContainer = document.createElement('div');
cardsContainer.classList.add('archive-portfolio-cards-contener');
cardsProduct.appendChild(cardsContainer);

const buttonEl = document.querySelector('.archive-portfolio-pagination');
console.log(buttonEl);

let cardsPerPage = 6;
let currentPage = 1;


function displayCards(arrData, rows, page) {
     
    page--;
    const start = rows * page;
    const end = start + rows;
    const paginatedData = arrData.slice(start, end);
  
    paginatedData.forEach((element) => {
        const dataCart = `
    <div class="archive-portfolio-cards-item">
                    <img src="${element.img_card}" alt="cord">
                    <div class="archive-portfolio-cards-name">
                        <p class="archive-portfolio-cards-price">${element.name}</p>
                        <p class="archive-portfolio-cards-price">₽ ${element.price_card}</p>
                    </div>
                    <div class="archive-portfolio-cards-item-box">
                        <img class="archive-portfolio-cards-item-img" src="${element.img_logo}" alt="logo">
                    </div>
                </div>
  `;
  cardsContainer.insertAdjacentHTML('beforeend', dataCart);
    });
  }
  displayCards(product, cardsPerPage, currentPage);

  buttonEl.addEventListener('click', function (e) {
    currentPage++;
    displayCards(product, cardsPerPage, currentPage);
  });


 
 