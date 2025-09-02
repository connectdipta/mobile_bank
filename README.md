# Mobile Bank App

This is a simple, client-side mobile banking application built with HTML, CSS (Tailwind CSS and DaisyUI), and JavaScript. It simulates core banking functionalities and is intended for educational purposes to demonstrate front-end development principles.

## Features

- **Dynamic Balance Display:** The available balance updates in real time based on transactions.
- **Simulated Transactions:** Perform actions like **Add Money**, **Cash Out**, and **Transfer Money**.
- **Transaction History:** View a chronological list of all completed transactions.
- **Interactive UI:** The user interface changes to show the relevant form (add money, cash out, etc.) when a service icon is clicked.
- **Client-Side Validation:** Basic validation ensures all form fields are filled out and the correct PIN is entered before a transaction is processed.

## How to Use

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/mobile-bank-app.git](https://github.com/your-username/mobile-bank-app.git)
    ```
2.  **Open the Project:** Navigate to the cloned directory.
3.  **Run Locally:** Open the `index.html` file in your web browser.

## Technologies

- **HTML5:** Provides the structure of the application.
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **DaisyUI:** A component library that extends Tailwind CSS for pre-built UI components.
- **JavaScript (ES6):** Handles all the application logic, including event listeners, form submissions, and DOM manipulation.

## Important Note

This is a **front-end only** demonstration. There is no backend server or database connected to this application. All data, including the balance and transaction history, is stored in a JavaScript array and will **reset when the page is reloaded**.

For security purposes, the PIN is hardcoded as `1234` in the `main.js` file. In a real-world application, authentication and transaction logic would be handled securely on a server.
