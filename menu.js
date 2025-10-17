const products = [
  { id: 1, title: "Chicken Vesuvio", price: 6.00, img: "Images/chicken-vesuvio.jpg" },
  { id: 2, title: "Penne All'Arrabbiata", price: 6.00, img: "Images/penne-arrabbiata.jpg" },
  { id: 3, title: "Porchetta", price: 5.00, img: "Images/porchetta.avif" },
  { id: 4, title: "Grandma's Lasagna", price: 3.00, img: "Images/Lasagna.webp" },
  { id: 5, title: "Skirt Steak Saltimbocca", price: 3.00, img: "Images/skirt-steak.webp" },
  { id: 6, title: "Braciole", price: 6.00, img: "Images/braciole.jpeg" },
  { id: 7, title: "Zucchini Risotto with Shrimp", price: 6.00, img: "Images/shrimp-risotto.jpeg" },
  { id: 8, title: "Italian Baked Rice and Clams", price: 6.00, img: "Images/clam-rice.jpeg" },
  { id: 9, title: "Osso Buco with Red Wine", price: 6.00, img: "Images/osso-buco.jpg" }
];

const menuGrid = document.getElementById('menuGrid');

function createMenuCard(item){
    const card = document.createElement('div');
    card.className= 'menu-card';

    const img= document.createElement('img');
    img.src= item.img;
    img.alt= item.title;
    card.appendChild(img);

    const title= document.createElement('h3');
    title.textContent = item.title;
    card.appendChild(title);

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `$${item.price.toFixed(2)}`;
    card.appendChild(price);

    return card;
}

function renderMenu() {
  products.forEach(item => {
    menuGrid.appendChild(createMenuCard(item));
  });
}

renderMenu();