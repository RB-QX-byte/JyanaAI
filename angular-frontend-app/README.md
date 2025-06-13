# Angular Frontend App

This is an Angular frontend application designed to demonstrate the basic structure and components of an Angular project.

## Project Structure

The project consists of the following main directories and files:

- **src/**: Contains the source code of the application.
  - **app/**: Contains the main application components and modules.
    - **components/**: Contains reusable components.
    - **app.component.ts**: The root component of the application.
    - **app.component.html**: The HTML template for the root component.
    - **app.component.css**: Styles specific to the root component.
    - **app.module.ts**: The root module that declares the components and imports necessary Angular modules.
  - **assets/**: Directory for static assets like images and fonts.
  - **environments/**: Contains environment-specific settings for development and production.
  - **index.html**: The main HTML file serving as the entry point for the application.
  - **main.ts**: The main entry point for bootstrapping the Angular application.
  - **polyfills.ts**: Polyfills needed for compatibility across different browsers.
  - **styles.css**: Global styles for the application.
  - **test.ts**: Setup for the testing environment.

- **e2e/**: Contains end-to-end tests for the application.
  - **src/**: Source files for end-to-end testing.
    - **app.e2e-spec.ts**: End-to-end tests for the application.
    - **app.po.ts**: Page objects for encapsulating interactions with the application during tests.

- **angular.json**: Configuration file for Angular CLI, specifying project settings and build options.
- **package.json**: Configuration file for npm, listing dependencies and scripts for the project.
- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options and files to include.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd angular-frontend-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200` to view the application.

## Running Tests

To run the unit tests, use the following command:
```
ng test
```

To run end-to-end tests, use:
```
ng e2e
```

## Build

To build the application for production, use:
```
ng build --prod
```

This will create a `dist/` directory with the production build of the application.

## License

This project is licensed under the MIT License. See the LICENSE file for details.