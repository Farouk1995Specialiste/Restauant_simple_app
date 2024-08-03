import myImage from './images/pic1.jpg';
import myImage2 from './images/pic2.jpg';
import myImage3 from './images/pic3.jpg'
import myImage4 from './images/pic4.jpg'
import myImage5 from './images/pepe.png'
import myImage6 from './images/pomodoro.png'

function createCard(imageSrc, titleText, descriptionText,priceFood) {
    const card = document.createElement('div');
    card.classList.add('card');

    const leftCard = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = titleText;
   
    const price = document.createElement('span');
    price.textContent = priceFood;
   price.classList.add('price')
    const paragraph = document.createElement('p');
    paragraph.classList.add('lorem');
    paragraph.textContent = descriptionText;

    leftCard.appendChild(title);
    leftCard.appendChild(price)
    leftCard.appendChild(paragraph);

    const rightCard = document.createElement('div');
    const img = document.createElement('img');
    img.src = imageSrc;
    img.width = 150;
    img.height = 150;

    rightCard.appendChild(img);

    card.appendChild(rightCard);
    card.appendChild(leftCard);

    return card;
}

export function menuPage() {
    const content = document.getElementById('content');

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu', 'page');

    const container = document.createElement('div');
    container.classList.add('container');

 const cardArr = [
  {
    imageSrc : myImage,
    titleText:'Fried Chicken',
    descriptionText:'Southern Fried Chicken, Gouda, Kimchi, Kimchi Mayo, Feta Cheese Bomb, RocoMayo & Small Fries',
    priceFood:'25$'
  },
  {
    imageSrc: myImage2,
    titleText: 'Fried Chicken',
    descriptionText:' Beef Smash, Aged Cheddar, Bacon, Southern Fried Tomato, Red Onion, RocoSalsa, Nachos Chips & RocoMayo & Small Fries ' ,    
    priceFood: '5$'

  },
  {
    imageSrc: myImage3,
    titleText: 'SLOWTOWN',
    descriptionText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla delectus accusamus illum reprehenderit nisi consectetur repellat recusandae.',
    priceFood: '15$'

  },
  {
    imageSrc :myImage4,
    titleText: 'TRIPPY HERMANO',
    descriptionText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla delectus accusamus illum reprehenderit nisi consectetur repellat recusandae.',
   priceFood:'10$'

  },
  {
    imageSrc:  myImage5,
    titleText:'Pepe',
    descriptionText:'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
    priceFood:    '14$'

  },
  {
imageSrc :myImage6,
titleText:'Pomodoro',
descriptionText:'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
priceFood:'18$'

  }
 ]
 
  cardArr.forEach(card => {
    const menuCard = createCard(card.imageSrc, card.titleText, card.descriptionText, card.priceFood);
    container.appendChild(menuCard);
});

    menuPage.appendChild(container);
    content.appendChild(menuPage);
}
