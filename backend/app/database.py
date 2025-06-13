from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from tenacity import retry, stop_after_attempt, wait_exponential
import os
import logging
from .models.base import Base

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Get database URL from environment variable
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./taskflow.db")

# Handle PostgreSQL URL format from Render
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Database engine configuration
engine = create_engine(
    DATABASE_URL,
    pool_size=5,
    max_overflow=10,
    pool_timeout=30,
    pool_pre_ping=True,
    echo=os.getenv("SQLALCHEMY_ECHO", "false").lower() == "true"
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@retry(
    stop=stop_after_attempt(5),
    wait=wait_exponential(multiplier=1, min=4, max=10),
    reraise=True
)
def init_db():
    """Initialize the database with retry mechanism."""
    try:
        Base.metadata.create_all(bind=engine)
        logger.info("Database initialized successfully")
    except Exception as e:
        logger.error(f"Failed to initialize database: {e}")
        raise

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close() 