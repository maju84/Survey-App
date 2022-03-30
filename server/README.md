# Survey App Server

## Getting started development

1. Required:
- NodeJS (16.13.1)
- MongoDB (5.0.6) for instance at mongodb://localhost:27017  
  ```bash
  docker run -d --name survey-mongodb -p 27017:27017 mongo:5.0.6 
  ```

2. Recommended:
- Docker https://www.docker.com/ 
- Insomnia REST client https://insomnia.rest/ (or Postman, curl)
- yEd graph editor https://www.yworks.com/products/yed

3. Install the npm packages
   ```bash
   npm install
   ```

4. Configure environment variables
- Copy `.env.example` contents into `.env` and `.env.test.local` and replace the values. <p>
- Both `.env` and `.env.test.local` files are listed in `.gitignore`.

5. misc contents
- /insomnia contains collection for insomnia rest client
- /docu contains diagrams created with yEd 
  