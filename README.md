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

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/kwamado/space-birthday.git
    cd space-birthday
    ```

2. **Configuration**:
    Create a `env.js` file in the root directory:

    ```js
    API_KEY=your_actual_key_here
    ```

## 📂 Project Structure

```directory

space-birthday/
├── assets/
│   └── logo.png
├── src/
│   ├── api.js          # Logic for fetching data from NASA APOD API
│   ├── index.html      # HTML entry point
│   ├── script.js       # Main scripts
│   ├── style.css       # Main styles
│   └── ui.js           # UI components
└── env.js              # Environment variables (API Key)

```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
