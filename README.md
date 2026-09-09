# Express JS Serverless API
Configured express to be used on vercel or netlify.

## Steps:
1. Clone this repository: `git clone https://github.com/khianvictorycalderon/express-js-serverless-api.git`
2. Run `npm install` to install necessary packages.
3. Run `npm run dev` to test your backend.

---

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

## Dependencies
- `express`
- `cors`
- `serverless-http`

## Dev Dependencies
- `nodemon`

## Configuration
- Updated `package.json`:
    ```json
    "scripts": {
        "dev": "nodemon ./api/index.js"
    }
    ```