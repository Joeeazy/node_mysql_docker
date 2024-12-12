# Products API

This repository contains a Node.js API for managing products, built with Express.js and MySQL. The MySQL database instance is set up using Docker, leveraging Docker commands to create the image, run the container, and handle volumes for persistent storage.

## Features

- RESTful API for product management.
- CRUD operations (Create, Read, Update, Delete).
- Persistent database storage using MySQL.
- Containerized MySQL setup using Docker.
- Scalable and modular design.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Docker](https://www.docker.com/)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Joeeazy/node_mysql_docker.git
cd mysql_node
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=products
```

### 5. Start the API Server

Run the following command to start the API server:

```bash
npm run dev
```

The server will start on `http://localhost:5000` by default.

### 6. Test the API

Use a tool like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the API endpoints.

## Project Structure

```
.
├── src
│   ├── handlers
│   │   └── product.handlers.js
│   ├── db
│   │   └── db.js
│   │   └── queries.js
│   ├── routes
│   │   └── product.route.js
│   └── index.js
├── .env
├── package-lock.json
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

For questions or support, contact [joeeazy34@gmail.com](mailto:joeeazy34@gmail.com).
