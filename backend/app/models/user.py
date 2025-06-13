from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime

from .base import BaseModel

class User(BaseModel):
    __tablename__ = "users"

    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    last_login = Column(DateTime, nullable=True)

    # Relationships
    tasks = relationship("Task", back_populates="owner")
    projects = relationship("Project", back_populates="owner")
    comments = relationship("Comment", back_populates="author")
    notifications = relationship("Notification", back_populates="user") 