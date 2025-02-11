# Morshed - Portfolio Application

A personal portfolio website built using Next.js, showcasing projects, skills, and experiences. The application uses **MongoDB**, **Express**, **Node.js**, **NextJS** and **TypeScript** to provide a complete idea about me.

## Features

-   **Authentication:**

    -   User login and registration with JWT authentication.
    -   Role-based access control (Admin and Customer).
    -   Protected routes to restrict access to specific parts of the app based on the user's role.

-   **Project Management:**

    -   View a list of projects available in the store.
    -   View project details (name, description, image, etc.).

-   **Blog Management:**

    -   Create a blog.
    -   Read and Update a blog.
    -   Delete a blog.

-   **Message Management:**

    -   Create a message or create a record for client.
    -   Read message with details like name, email and message.

-   **UI And UX:**

    - Responsive design ensuring compatibility across various devices.
    - Dynamic project showcase with detailed descriptions and links.
    - Blog section for sharing articles and insights.
    - Contact form for direct communication.  Sonner for toast notifications (success, error, and info messages).

## Technologies Used

## Technologies Used

-   **Node.js** – JavaScript runtime built on Chrome's V8 JavaScript engine.
-   **Express** – Web application framework for Node.js.
-   **MongoDB** – NoSQL database used to store products and orders.
-   **Mongoose** – ODM (Object Document Mapper) for MongoDB.
-   **TypeScript** – A superset of JavaScript that adds static types.
-   **Dotenv** – A module for loading environment variables from a `.env` file.
-   **CORS** – Middleware for enabling Cross-Origin Resource Sharing.
-   **Next.js**: React framework for server-side rendering and static site generation.
-   **React**: JavaScript library for building user interfaces.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **Framer Motion**: Library for animations.

## Requirements

Before running the project locally, make sure you have the following installed:

-   **Node.js** – Version 16.x or higher
-   **npm or yarn** – Package managers for managing dependencies

## Setting Up the Project Locally

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/theMorshed/portfolio_frontend_nextjs.git
```

### 2. Install Dependencies

Navigate to the project directory and install all required dependencies:

```bash
cd portfolio_frontend_nextjs
npm install
```

### 3. Run the Application

Start the development server by running the following command:

```bash
npm run dev
```

This will start the server on the port specified in your .env file (default: 3000).

### 4. Access the Application

Once the server is running, you can access the application API at:

```bash
http://localhost:3000
```

## Development & Contribution

- Fork the repository to your own GitHub account.
- Clone your fork to your local machine.
- Create a new branch for your changes.
- Make your changes and commit them.
- Push your changes and create a pull request.

We welcome contributions and improvements! If you have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the developers of the libraries and tools used in this project:
    - [React](https://reactjs.org/) – JavaScript library for building user interfaces.
    - [Redux](https://redux.js.org/) – State management library.
    - [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework.
    - [Ant Design](https://ant.design/) – UI component library.
    - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) – Library for JWT authentication.
    - [Sonner](https://sonner.dev/) – Lightweight toast notifications.