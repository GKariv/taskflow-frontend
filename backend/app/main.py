from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
import logging
from .health import router as health_router

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Get environment variables with fallbacks
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")
VERCEL_URL = os.getenv("VERCEL_URL", "")
ALLOWED_ORIGINS = [FRONTEND_URL]
if VERCEL_URL:
    ALLOWED_ORIGINS.append(f"https://{VERCEL_URL}")

app = FastAPI(
    title="TaskFlow API",
    description="TaskFlow API for task management",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Error handling
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    logger.error(f"HTTP error: {exc.detail}")
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
    )

@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    logger.error(f"Unexpected error: {str(exc)}")
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"},
    )

# Health check endpoint - Required for Render
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/")
async def root():
    return {"message": "TaskFlow API is running"}

# Register your routers
# app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
# app.include_router(users.router, prefix="/api/users", tags=["users"])
# app.include_router(tasks.router, prefix="/api/tasks", tags=["tasks"])

# Include routers
app.include_router(health_router, prefix="/api") 