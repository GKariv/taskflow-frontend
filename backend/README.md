# TaskFlow Backend

This is the backend service for the TaskFlow application, built with FastAPI.

## Features

- FastAPI-based REST API
- PostgreSQL database with SQLAlchemy ORM
- JWT authentication
- Alembic migrations
- Docker support

## Development

1. Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -e .
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your settings
```

4. Run migrations:
```bash
alembic upgrade head
```

5. Start the development server:
```bash
uvicorn app.main:app --reload
```

## Testing

Run tests with pytest:
```bash
pytest
```

## Deployment

The application is configured for deployment on Render. See `render.yaml` for details. 