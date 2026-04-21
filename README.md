# 🚀 Space Birthday

A stunning web application that fetches and displays the actual NASA Astronomy Picture of the Day (APOD) for any given date.

## ✨ Features

- **Interactive Date Picker**: Easily select any date in the past to see the corresponding space photo.
- **APOD Integration**: Pulls daily astronomy pictures directly from the NASA APOD API.

- **HD Image Display**: View high-quality astronomy photos with a sleek, modern interface.

- **Detailed Information**: Get the title, explanation, and copyright information for each photo.

- **Responsive Design**: Beautifully displayed on both desktop and mobile devices.

## 📋 Prerequisites

- A modern web browser.
- A free API key from [NASA Open APIs](https://api.nasa.gov/). (The application uses a default key for demonstration, but it is recommended to use your own for production).

## 🔧 Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (usually comes with Node.js)

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/kwamado/space-birthday.git
    cd space-birthday
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configuration (Optional)**:
    If you want to use your own NASA API key, create a `.env` file in the root directory:

    ```env
    VITE_NASA_API_KEY=your_actual_key_here
    ```

4. **Run the development server**:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 📂 Project Structure

```directory

space-birthday/
├── public/             # Static assets
├── src/
│   ├── api/            # API configuration
│   ├── components/     # Reusable UI components
│   ├── views/          # Main views (Home)
│   ├── App.vue         # Root component
│   └── main.js         # Entry point
├── .env                # Environment variables (API Key)
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation

```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
