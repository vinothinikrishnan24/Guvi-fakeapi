# Fake API Store 🛍️

Welcome to the **Fake API Store**, a simple e-commerce web app built with ReactJS! This app fetches products from the [Fake Store API](https://fakestoreapi.com/) and lets users browse products, add them to a cart, and manage their cart with a 10% discount on the total price. It’s a fun way to practice building an online store using ReactJS, React Router, and modern web technologies.

## ✨ Features

- **Browse Products**: View a list of products fetched from the Fake Store API, including images, titles, prices, and descriptions.
- **Add/Remove from Cart**: Add products to your cart with a single click. If a product is already in the cart, you can remove it directly from the product page.
- **Cart Management**: Visit the cart page to see all added items, increase/decrease quantities, or remove items.
- **Dynamic Pricing**: See the total price for each item (price × quantity) and the overall cart total, updated in real-time.
- **10% Discount**: Get a 10% discount on the total cart price, shown on the cart page.
- **Responsive Design**: The app looks great on all devices, from big screens to small phones.
- **Navigation**: Easily switch between the product page and cart page using React Router.
- **Cart Count**: The cart icon in the navigation bar shows the number of unique products in your cart (not the total quantity).
- **Extra Features**:
  - Animated taglines in the navigation bar (e.g., "Big Sale Today!").
  - A countdown timer on the cart page that redirects to the product page if the cart is empty.
  - Hover tooltips on cart items to show full product descriptions.
  - Persistent cart using `localStorage`—your cart items are saved even if you close the app.

## 🚀 Getting Started

Follow these steps to set up and run the Fake API Store on your computer.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/fake-api-store.git
   cd fake-api-store
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the App**:
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`.

## 📖 Usage

- **Product Page (`/` or `/products`)**:
  - Browse products fetched from the Fake Store API.
  - Each product shows its image, title, price, and a short description.
  - Click "Add to Cart" to add a product to your cart. If it’s already in the cart, the button changes to "Remove from Cart".
- **Cart Page (`/cart`)**:
  - View all items in your cart, including name, price, and quantity.
  - Use the "+" and "–" buttons to increase or decrease the quantity of each item.
  - Click "Remove" to take an item out of the cart.
  - See the total price and a 10% discounted price at the bottom.
  - If the cart is empty, a countdown timer will redirect you to the product page after 5 seconds.
- **Navigation Bar**:
  - Click "Products" to go to the product page.
  - Click the cart icon (🛒) to go to the cart page. The number on the icon shows how many different products are in your cart.
  - Enjoy the animated taglines (e.g., "Happy Shopping!") that change every few seconds.

## 🗂️ Project Structure

Here’s a quick look at the main files and folders in the project:

```
fake-api-store/
├── public/
│   ├── index.html        # Main HTML file
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    # Navigation bar component
│   │   ├── ProductList.jsx # Product page component
│   │   └── CartPage.jsx   # Cart page component
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Entry point for React
│   ├── index.css         # Global styles
│   └── styles.css        # Additional styles for components
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 🛠️ Technologies Used

- **ReactJS**: For building the user interface.
- **React Router**: For navigating between the product and cart pages.
- **HTML/CSS**: For structuring and styling the app.
- **JavaScript**: For adding functionality and fetching data.
- **Fake Store API**: To fetch product data.

## 🎨 Styling

- The app uses a mix of inline styles (in JSX) and external CSS files (`index.css` and `styles.css`).
- Responsive design is achieved using CSS Grid and media queries.
- Buttons have hover effects like scaling and pulsing animations.
- The navigation bar has a gradient background and animated taglines.

## 📝 Notes

- The cart count in the navigation bar shows the number of unique products (not the total quantity of items). For example, if you have 3 shirts and 1 hat, the cart icon will show "2".
- The app prevents adding duplicate products to the cart by showing an alert if you try to add the same product again.
- Cart data is saved in `localStorage`, so your cart persists even after refreshing the page.

## 🌟 Future Improvements

- Add a search bar to filter products by name.
- Include a "Clear Cart" button to remove all items at once.
- Add a cart icon tooltip to show a quick preview of cart items on hover.
- Display full product descriptions with a "See More" button on the product page.

## 🤝 Contributing

Contributions are welcome! If you’d like to improve the Fake API Store, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Add feature-name"`.
5. Push to the branch: `git push origin feature-name`.
6. Open a Pull Request.

## 📧 Contact

If you have any questions or suggestions, feel free to reach out at [your-email@example.com].

## 📜 License

This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.

---

Happy shopping at the Fake API Store! 🛒
```

---

### Explanation for a 5-Year-Old Kid

Hey there, little buddy! 😊 Your app is like a pretend online shop where grown-ups can look at things from a magic online list (called the Fake Store API) and put them in a cart, just like when you pick toys to buy! The `README.md` file is like a little treasure map 📜 that tells everyone how to play with your shop and what’s inside it. Let’s a note you leave on a big online place called GitHub, so other grown-ups can try your shop game and help make it even more fun.

**What the Treasure Map Says**:
- **What’s Your Shop?**: It says, “Hi! This is the Fake API Store! You can look at things from the magic list, add them to a cart, and see a special price with 10% off!”
- **What Can You Do?**: You can look at things (products), add them to your cart, take them out, change how many you have, and see how much they cost. The shop looks nice on big and small screens, and there’s a little cart picture 🛒 at the top that shows how many different things you picked!
- **How to Start It**: It tells grown-ups how to open your shop on their computer—like downloading it, setting it up, and pressing “Play” (npm start) to see it.
- **What’s Inside**: It shows a map of the shop’s rooms (files), like the main room (`App.jsx`), the product shelf (`ProductList.jsx`), and the cart room (`CartPage.jsx`).
- **What Tools You Used**: It says you used ReactJS, React Router, HTML/CSS, and JavaScript to make your shop, like using magic blocks (LEGO bricks) to build it.
- **Fun Ideas**: It has ideas to make your shop even better, like adding a search bar to find things faster or a button to empty the cart.
- **How to Help**: It tells other grown-ups how they can add their own ideas to your shop, like adding more fun stuff to the game.

**Why Do We Need This Map?**:
- It’s like leaving a note with your toys so your friends know how to play with them! If you share your shop on GitHub, other people can see the map (`README.md`) and know what your shop does, how to use it, and how to help make it even better.
- Without the map, they might not know how to start the game or what’s inside, so the map makes it easy and fun for everyone! 🗺️

---

### Final Notes

Your `README.md` is now ready to be added to your GitHub** repository! To add it:
1. Create a file in your project folder called `README.md`.
2. Copy the code above into it.
3. Save it, then push it to your GitHub repository using:
   ```bash
   git add README.md
   git commit -m "Add README.md file"
   git push origin main
   ```

This `README.md` file gives a clear overview of your Fake API Store, explains its features, provides setup instructions, and invites others to try it out or contribute. If you’d like to add more sections—like screenshots of your app or a live demo link—just let me know, and I’ll help you update the treasure map! 😊 Great job making such a cool online shop! 🛍️
