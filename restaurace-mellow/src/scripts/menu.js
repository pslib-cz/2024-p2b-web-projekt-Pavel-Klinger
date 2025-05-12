// filepath: restaurace-mellow/restaurace-mellow/src/scripts/menu.js
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        {
            name: "Spaghetti Carbonara",
            description: "Classic Italian pasta dish with creamy sauce, pancetta, and parmesan.",
            image: "images/menu/spaghetti-carbonara.jpg"
        },
        {
            name: "Margherita Pizza",
            description: "Traditional pizza topped with fresh mozzarella, tomatoes, and basil.",
            image: "images/menu/margherita-pizza.jpg"
        },
        {
            name: "Caesar Salad",
            description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
            image: "images/menu/caesar-salad.jpg"
        }
    ];

    const menuContainer = document.querySelector('.menu-container');

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-image">
            <h2 class="menu-item-name">${item.name}</h2>
            <p class="menu-item-description">${item.description}</p>
        `;

        menuContainer.appendChild(card);
    });
});