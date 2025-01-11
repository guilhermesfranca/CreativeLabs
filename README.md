# Landing Page - Design Agency

This project is a landing page for a design agency, built with **ReactJS**. The main goal was to consolidate the knowledge gained, such as using `useState` and `onClick`, as well as creating a componentized structure to improve code organization and reusability.

## Technologies Used

- **ReactJS**: JavaScript library for building user interfaces.
- **useState**: React hook used to manage the page’s state.
- **onClick**: Event used to capture clicks and perform actions, like switching the page theme.
- **CSS Modules**: Isolated styling per component to avoid style conflicts.
- **Next.js**: React framework optimized for production and static page generation.

## Features

- **Theme Toggle**: The page includes a theme toggle functionality that switches between light and dark modes, using `useState` to control the theme state. The button icon also changes depending on the active theme.
- **Componentization**: The code is modularized into different components (`Topo`, `SecaoBanner`, `Rodape`, `SecaoExperienciaTrabalho`, `Card`) to improve structure and code reusability.
- **Responsiveness**: The page is responsive, ensuring a good viewing experience across different screen sizes.

## Project Structure

- **/components**: Contains all reusable components (such as `Topo`, `SecaoBanner`, etc.).
- **/public**: Stores static images like the logo and banner.
- **/styles**: CSS styles separated by component using CSS Modules.
  
## Installation

Follow the steps below to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/landing-page-design-agency.git
Navigate to the project directory:
bash
Copy code
cd landing-page-design-agency
Install the dependencies:
bash
Copy code
npm install
Run the project locally:
bash
Copy code
npm run dev
Open the application in your browser at http://localhost:3000.
How to Use
The landing page starts with the light theme by default.
Click on the theme icon (sun or moon) at the top to toggle between light and dark themes.
Contributing
Feel free to open issues or send pull requests to improve this project. Any contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for more details.
