# TaskFlow Project

This project is organized into two main parts: frontend and backend.

## Project Structure

```
taskflow-ai-local/
├── frontend/                 # Frontend application (React + TypeScript)
│   ├── src/                 # Source files
│   ├── public/             # Static files
│   ├── package.json        # Frontend dependencies
│   └── ...                 # Other frontend configuration files
│
└── backend/                # Backend application (Python + FastAPI)
    ├── app/               # Backend source code
    │   ├── main.py       # FastAPI application entry point
    │   ├── models/       # Database models
    │   ├── schemas/      # Pydantic schemas
    │   ├── routes/       # API routes
    │   └── services/     # Business logic
    ├── tests/            # Backend tests
    └── requirements.txt  # Python dependencies
```

## Frontend (React + TypeScript)

The frontend is built with:
- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI

To run the frontend:
```bash
cd frontend
npm install
npm run dev
```

## Backend (Python + FastAPI)

The backend is built with:
- FastAPI
- SQLAlchemy
- Pydantic
- Python-Jose for JWT
- Passlib for password hashing

To run the backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Development

1. Start the backend server first (runs on http://localhost:8000)
2. Start the frontend development server (runs on http://localhost:5173)
3. The frontend will automatically connect to the backend API

## API Documentation

Once the backend is running, you can access:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/6fa40976-db12-454d-89be-ef5003be5581

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6fa40976-db12-454d-89be-ef5003be5581) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6fa40976-db12-454d-89be-ef5003be5581) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# TaskFlow AI

TaskFlow AI is a modern task management application built with FastAPI and React.

## Backend Deployment (Railway)

1. Create a new project on Railway
2. Connect your GitHub repository
3. Add a PostgreSQL database
4. Set the following environment variables:
   - `DATABASE_URL`: Your Railway PostgreSQL connection string
   - `SECRET_KEY`: A secure random string
   - `CORS_ORIGINS`: Your frontend URLs (comma-separated)
   - `ENVIRONMENT`: production
   - `LOG_LEVEL`: INFO
   - `API_PREFIX`: /api/v1
   - `DEBUG`: false
   - `TESTING`: false
   - `WORKERS`: 4
   - `TIMEOUT`: 120
   - `RELOAD`: false
   - `HOST`: 0.0.0.0
   - `ALLOWED_HOSTS`: *.railway.app,localhost
   - `SSL_REDIRECT`: true
   - `SESSION_COOKIE_SECURE`: true
   - `CSRF_COOKIE_SECURE`: true
   - `SECURE_SSL_REDIRECT`: true
   - `SECURE_HSTS_SECONDS`: 31536000
   - `SECURE_HSTS_INCLUDE_SUBDOMAINS`: true
   - `SECURE_HSTS_PRELOAD`: true
   - `SECURE_PROXY_SSL_HEADER`: X-Forwarded-Proto,https

5. Deploy the backend service

## Frontend Deployment (Railway)

1. Create a new project on Railway
2. Connect your GitHub repository
3. Set the following environment variables:
   - `VITE_API_URL`: Your backend Railway URL
   - `PORT`: 3000

4. Deploy the frontend service

## Local Development

### Backend

1. Create a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```

3. Set up environment variables:
   ```bash
   export DATABASE_URL="postgresql://user:password@localhost:5432/taskflow"
   export SECRET_KEY="your-secret-key"
   export CORS_ORIGINS="http://localhost:3000"
   ```

4. Run migrations:
   ```bash
   cd backend
   alembic upgrade head
   ```

5. Start the server:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

Once the backend is running, you can access the API documentation at:
- Swagger UI: `/api/v1/docs`
- ReDoc: `/api/v1/redoc`

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
