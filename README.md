# Fit4Soul - Fitness Website

**Purpose**: This is the client-side application for the Fit4Soul project. It enables users to interact with the trainer and book the slot, view details, card payment, and manage their data with real-time data fetching and updates.

**Live URL**: [Fit4Soul Webiste](https://fit4souls.web.app/login)
Admin email : admin@fitforsoul.com
Admin pass : 1Asdfg

## Installing the Fit4Souls

To set up the Website locally, follow these steps:

### Clone the Repository:

```bash
git clone https://github.com/sumdx/fit4souls-client-side.git
cd fit4souls-client-side
```

### Install Dependencies:

```bash
npm install
```

### Start the Development Server:

```bash
npm run dev
```

### Open in Browser:

Navigate to:

```
http://localhost:5173
```

---
## Key Features

- **User Interface**: A responsive and interactive frontend for booking and payment.
- **Responsive Design**: The website is fully responsive, adapting to different screen sizes, from mobile phones to desktops.
- **Fit4Soul Database**: Users can Check Forum , choose trainer, choose timeslot and book the trainer.
- **Firebase Authentication**: Secure user login and registration with Firebase.
- **Dynamic Routing**: React Router is used for seamless navigation across different pages.
- **Real-Time Interaction**: Users can interact with trainer and forum by upvoting the forum, viewing detailed descriptions.
- **Helmet for Dynamic Title**: Dynamic page titles with React Helmet for better SEO management.
- **Carousel for Image Display**: Display Fit4Souls in an interactive carousel.
- **TailwindCSS & DaisyUI**: Modern styling with utility-first CSS using TailwindCSS and UI components with DaisyUI.
  
## Frontend Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation and routing between pages.
- **React Helmet Async**: To manage dynamic document head and improve SEO.
- **Axios**: For HTTP requests to the backend API.
- **Firebase**: For user authentication.
- **TailwindCSS**: For utility-first CSS framework to build custom designs.
- **DaisyUI**: TailwindCSS component library for faster UI design.

## NPM Packages Used

- **axios**: Promise-based HTTP client for making requests to the backend API.
- **firebase**: To implement Firebase authentication and interact with Firebase services.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point for React DOM rendering.
- **react-helmet-async**: A library to manage the document head, useful for dynamic page titles and SEO.
- **react-icons**: Library to include popular icons in React components.
- **react-responsive-carousel**: A carousel component for displaying images interactively.
- **react-router-dom**: Declarative routing for React applications.
- **sweetalert2**: For better, customizable pop-up alerts.
- **tailwindcss**: A utility-first CSS framework for styling the application.
- **Flobite**: TailwindCSS component library to speed up UI development.
- **Stripe**: A third party payment gateway.

## Dependencies  
List the key dependencies used in the project:  
```json
"dependencies": {
    "@stripe/react-stripe-js": "^3.1.1",
    "@stripe/stripe-js": "^5.5.0",
    "@tanstack/react-query": "^5.64.1",
    "antd": "^5.23.2",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "flowbite-react": "^0.10.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "react-router-dom": "^6.28.1",
    "react-select": "^5.9.0",
    "recharts": "^2.15.0",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.2.1"
  },
