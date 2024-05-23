// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            // Create an element to represent the category
            const categoryElement = document.createElement('h3');
            categoryElement.textContent = category;
            categoryElement.classList.add('category');
            menuContainer.appendChild(categoryElement);

            // Create an element to represent a list of items
            const itemList = document.createElement('ul');
            menu[category].forEach(item => {
                // Create a list item element
                const listItem = document.createElement('li');
                listItem.textContent = item;
                listItem.classList.add('item');
                listItem.addEventListener('click', () => addToOrder(item));
                itemList.appendChild(listItem);
            });

            // Append the list of items to the menu container
            menuContainer.appendChild(itemList);
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    orderItemsList.appendChild(listItem);

    // Calculate and update the total price
    // For simplicity, let's assume each item costs $10.00
    const itemPrice = 10.00;
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + itemPrice;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
