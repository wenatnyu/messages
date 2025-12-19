# Messages/Blessings Web Application

This is a simple web application that allows users to view messages/blessings from others, submit their own blessings, and share the website after submission.

## Features

### Page 1: Display All Blessings
- Shows all existing blessings from various users
- Content is loaded from the server

### Page 2: Submit Your Blessing
- Form to submit your own blessing
- Requires blessing content and your name
- Submissions are saved to the server

### Page 3: Success and Sharing
- Confirmation page after successful submission
- Thank you message
- Option to share/forward the website

## Implementation Details

The application consists of three main pages as described above. The backend provides:
- An endpoint to retrieve all blessings: `GET /api/messages`
- An endpoint to submit new blessings: `POST /api/messages`
- Proper storage mechanism for the blessings (JSON file storage)

## Getting Started

### Prerequisites
- Python 3.6 or higher
- pip (Python package installer)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd messages
   ```

2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

### Running the Application Locally

1. Start the server:
   ```
   python server.py
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5001
   ```

### Deploying to Railway

1. Sign up for an account at [Railway.app](https://railway.app/)
2. Install the Railway CLI: 
   ```
   npm install -g @railway/cli
   ```
3. Login to Railway:
   ```
   railway login
   ```
4. Initialize a new Railway project:
   ```
   railway init
   ```
5. Deploy your application:
   ```
   railway up
   ```
6. Add environment variables (if needed):
   ```
   railway environment
   ```
7. Open your deployed application:
   ```
   railway open
   ```

Alternatively, you can deploy directly from GitHub:
1. Push your code to a GitHub repository
2. Connect Railway to your GitHub repository
3. Railway will automatically deploy your application

### Project Structure

```
messages/
├── index.html          # Page 1: Display all blessings
├── submit.html         # Page 2: Submit a blessing
├── success.html        # Page 3: Success and sharing
├── styles.css          # Styling for all pages
├── script.js           # JavaScript for index.html
├── submit.js           # JavaScript for submit.html
├── success.js          # JavaScript for success.html
├── server.py           # Backend server (Flask)
├── requirements.txt    # Python dependencies
├── railway.toml        # Railway deployment configuration
├── Procfile            # Process file for Railway
├── package.json        # Package configuration
└── messages.json       # Data storage (created automatically)
```

## API Endpoints

- `GET /api/messages` - Retrieve all messages
- `POST /api/messages` - Submit a new message
- Static file serving for HTML, CSS, and JS files

## Troubleshooting

**Port already in use:** If you encounter an error that port 5001 is already in use, you can:
1. Modify the port number in `server.py` file (last line): 
   ```python
   app.run(debug=True, host='0.0.0.0', port=YOUR_PREFERRED_PORT)
   ```
2. On macOS, port 5000 is commonly used by AirPlay Receiver. You can disable it in System Settings > General > AirDrop & Handoff > AirPlay Receiver.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Python Flask
- Data Storage: JSON file storage
- CORS: Flask-CORS for handling cross-origin requests