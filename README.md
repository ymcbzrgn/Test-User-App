# User Data Update Test Website

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a simple test website developed for learning purposes. The website allows users to submit their name and surname, which gets stored in a MongoDB database. Users can view the stored user data on a separate page.

## Features

- User-friendly interface for data submission and retrieval.
- Data stored in a MongoDB database.
- Responsive design using Bootstrap for better user experience.

## Getting Started

1. Clone this repository to your local machine.
2. Install Node.js and npm if not already installed.
3. Install project dependencies using the command: `npm install`.
4. Make sure you have MongoDB installed and running locally.
5. Update the MongoDB connection URL in `index.js` to match your local setup.
6. Start the server with the command: `npm start`.
7. Access the website in your browser at: `http://localhost:3000`.

## Project Structure

- `index.js`: Main server file containing the Express.js application setup.
- `models/User.js`: Defines the User data model using Mongoose.
- `pages/index.ejs`: Home page template for data submission.
- `pages/update.ejs`: Update page template for displaying stored user data.
- `package.json`: Lists project dependencies and scripts.

## Dependencies

- Express.js
- EJS
- Mongoose
- Bootstrap

## Contributing

Feel free to contribute by submitting pull requests. Any improvements or fixes are welcome!

## License

This project is released under the [Unlicense](LICENSE) (a public domain dedication). For more information, please refer to the [full text of the Unlicense](LICENSE).
