# emdict

**emdict** is an English-to-Myanmar dictionary built using the Ornagai database. The project structure is inspired by the Bulletproof Node.js architecture.

## 🚀 Features

- English-to-Myanmar word translation
- REST API for word lookup
- Follows scalable and maintainable Node.js architecture

## 🛠️ Development Setup

### Prerequisites

- Node.js version 18.7.0
- nvm for Node version management

### Installation

1. Install Node.js v18.7.0 using nvm:

   nvm install 18.7.0  
   nvm use 18.7.0

2. Install dependencies:

   npm install

3. Set up environment variables:

   mv .env.sample .env

4. Start the server:

   Production:
   npm run start

   Development:
   npm run dev

## 📖 API Documentation

### Get Word Definition

GET http://<host>:<port>/search?w=<word>

Example:  
GET http://localhost:3000/search?w=hello
