## Testing

### Jest:
1. **Running the backend test:**
    - Make sure backend (server.js) is terminated or else it would fail.
    - In the Visual Studio terminal run the code:
    ```bash
    npm run test:jest
     ```
    - This will run the tests written for the backend. The quiz generation API function and its error handling will be tested.

### Cypress:
2. **Running the frontend test:**
    - Have both frontend and backend running on serparate terminals. (Refer to [Usage](./README.md#usage).)
    - In a separate Visual Studio terminal run the code:
    ```bash
    npm run cy:open
     ```
    - Select E2E testing on the screen that populates.
    - Select preferred testing site. (Chrome is advised.)
    - Select spec.cy.js as the tested file.
    - This will test the functionality of various routes and client side.