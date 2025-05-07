# Basic Login Page with Node.js, Express, MongoDB and EJS

This is a simple login and signup web application built using **Node.js**, **Express**, **MongoDB**, and **EJS** templating engine. It demonstrates basic authentication logic with hashed password storage using **bcrypt**.

## Features

- Signup page with hashed password storage
- Login page with user authentication
- Simple home page that lists all registered users (for demonstration purposes)
- Frontend templating using EJS
- Styled with basic CSS

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- EJS (Embedded JavaScript templates)
- bcrypt (for password hashing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DenizzALP/basic-login-page.git
   cd basic-login-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your MongoDB connection string in `config.js`:
   ```js
   mongoose.connect("your-mongodb-connection-string");
   ```

4. Run the application:
   ```bash
   node index.js
   # or if using nodemon
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5000
   ```

## Notes

- This project is for educational purposes and does not include session management, validation, or security best practices for production use.
- Passwords are securely hashed using bcrypt.
- All registered users are listed on the home page.

## License

MIT
