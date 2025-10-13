const products = [
    { id: 1, title: "Chicken Vesuvio", price: 6.00, img: "assets/p1.jpg" },
    { id: 2, title: "Penne All’Arrabbiata", price: 6.00, img: "assets/p2.jpg", featured: true, desc: "All'Arrabbiata means 'in an angry style' in Italian, but since this fiery dish takes just 15 minutes to make, it's sure to quickly mitigate any hangry bellies. Plus, it comes together largely from pantry staples." },
    { id: 3, title: "Porchetta", price: 5.00, img: "assets/p3.jpg" },
    { id: 4, title: "Grandma's Lasagna", price: 3.00, img: "assets/p4.jpg" },
    { id: 5, title: "Skirt Steak Saltimbocca", price: 3.00, img: "assets/p5.jpg" },
    { id: 6, title: "Braciole", price: 6.00, img: "assets/p6.jpg" },
    { id: 7, title: "Zucchini Risotto with Shrimp", price: 6.00, img: "assets/p7.jpg" },
    { id: 8, title: "Italian Baked Rice and Clams", price: 6.00, img: "assets/p8.jpg" }
];

const grid = document.getElementById('productGrid');
const cartCountEl = document.getElementById('cartCount');
let cartCount = 0;

function createCard(p) {
    const card = document.createElement('article');
    card.className = 'card';

    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    const img = document.createElement('img');
    img.src = p.img || '';
    img.alt = p.title;
    thumb.appendChild(img);
    card.appendChild(thumb);

    if (p.featured) {
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.textContent = '★';
        card.appendChild(badge);
    }


}
