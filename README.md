# emdict - English to Myanmar Dictionary

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.7.0-brightgreen)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

emdict is a comprehensive English-to-Myanmar dictionary application built using the Ornagai database. Following modern Node.js best practices, the project implements a scalable and maintainable architecture inspired by the Bulletproof Node.js pattern.

## 🚀 Key Features

- Accurate English-to-Myanmar word translations
- RESTful API for word lookup
- Clean, maintainable codebase
- Scalable architecture following industry best practices
- Environment-based configuration

## 📦 Installation

### Prerequisites

- Node.js v18.7.0 or higher
- npm (comes with Node.js)
- nvm (recommended for Node version management)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/emdict.git
   cd emdict
2. **Install Node.js using nvm (recommended)**:
   ```bash

   nvm install 18.7.0
   nvm use 18.7.0

3. **Install dependencies**:
   ```bash
   npm install
4. **Configure environment variables**:
   ```bash
   cp .env.sample .env
   Then edit the .env file with your configuration.

### 🏃 Running the Application
- **Development Mode**
   ```bash 
   npm run dev
 Starts the server with nodemon for automatic reloading.
   
- **Production Mode**
   ```bash
   npm run start
- **Running Tests**
   ```bash
   npm test
### 📚API Documentation
**Get Word Definition**
###### Endpoint:
###### GET /search?w={word}
 
###### Parameters:
 - w (required): The English word to look up

###### - Example Request:
       ```bash

      curl "http://localhost:3000/search?w=hello"
      Successful Response:
      json

      {
           "status": "success",
            "data": {
                "word": "hello",
    "definitions": [
      "မင်္ဂလာပါ",
      "ဟယ်လို"
    ]
  }
}

Error Response:
json

{
  "status": "error",
  "message": "Word not found"
}

-  ### 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

    Ornagai database for the dictionary data

    Bulletproof Node.js architecture inspiration
