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
