from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .health import router as health_router

app = FastAPI(title="TaskFlow API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://taskflow-frontend.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(health_router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to TaskFlow API"} 