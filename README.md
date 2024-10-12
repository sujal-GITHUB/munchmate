# munchmate

munchmate is a food delivery website that allows users to browse menus, place orders, and have their favorite meals delivered right to their doorstep. The platform provides a seamless user experience with features like user authentication, a shopping cart, and secure payment processing.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Login
- Browse and search for restaurants and food items
- Add items to a shopping cart
- Secure payment processing using Stripe
- User profile management
- Dark mode toggle for better user experience
- Responsive design for mobile and desktop devices

## Technologies Used

- **Frontend**: React, TailwindCSS, Redux, React-Hook-Form
- **Backend**: Node.js, Express, MongoDB
- **Payment Processing**: Stripe
- **Authentication**: Token-based authentication
- **Deployment**: [Your hosting provider here]

## Getting Started

To run this project locally, follow the instructions below.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/munchmate.git
   cd munchmate

2. Install the dependencies:
   ```bash
   npm install
   
3. Set up environment variables:
   Create a .env file in the root directory and add your configuration variables:
   ```makefile
   MONGODB_URI=your_mongodb_uri
   STRIPE_SECRET_KEY=your_stripe_secret_key
   JWT_SECRET=your_jwt_secret

4. Start the development server:

   ```bash
   npm start

## Live Demo

- Frontend: https://munchmate.onrender.com/
- Backend: [https://munchmate-backend-w257.onrender.com](https://munchmate-backend-w257.onrender.com/)
- Admin: https://munchmate-admin-tzui.onrender.com
## Usage

   Navigate to http://localhost:3000 in your browser to access the application.
   Sign up or log in to your account.
   Browse through available food items and add them to your cart.
   Proceed to checkout and complete your order using Stripe.
   
## Contributing

   Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

   This project is licensed under the MIT License. See the LICENSE file for details.
