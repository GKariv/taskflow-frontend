# Contributing to TaskFlow

Thank you for your interest in contributing to TaskFlow! This document provides guidelines and instructions for contributing.

## Development Setup

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the development server:
   ```bash
   uvicorn app.main:app --reload
   ```

## Code Style

### Frontend
- Follow the TypeScript style guide
- Use ESLint for code linting
- Write meaningful commit messages
- Add comments for complex logic

### Backend
- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions and classes
- Add comments for complex logic

## Pull Request Process

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Write or update tests as needed
5. Update documentation
6. Submit a pull request

## Testing

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
pytest
```

## Documentation

- Keep the README.md up to date
- Document all new features
- Update API documentation when making changes

## Questions?

Feel free to open an issue for any questions or concerns. 