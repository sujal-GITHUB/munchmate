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
- **Deployment**: Render

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


## Usage

- Open your browser and navigate to http://localhost:3000.
- Register a new account or log in if you already have one.
- Explore restaurants and menu items.
- Add desired items to your shopping cart.
- Proceed to checkout and securely complete your order via Stripe.

## Contributing

Contributions are highly appreciated! If you wish to contribute, please fork the repository and submit a pull request. For substantial feature additions or bug fixes, consider opening an issue first to discuss your proposal.

## License

   This project is licensed under the MIT License. See the LICENSE file for details.
