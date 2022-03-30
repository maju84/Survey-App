# Survey App Server

## Getting started development

1. Required:
- NodeJS (16.13.1)
- MongoDB (5.0.6) for instance at mongodb://localhost:27017  
  ```bash
  docker run -d --name survey-mongodb -p 27017:27017 mongo:5.0.6 
  ```

2. Recommended:
- Docker
- Insomnia (or Postman, curl)

3. Install the npm packages
   ```bash
   npm install
   ```

4. Configure environment variables
  Copy `.env.example` contents into `.env` and `.env.test.local` and replace the values. <p>
  Both `.env` and `.env.test.local` files are listed in `.gitignore`.
  