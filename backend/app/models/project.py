from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from .base import BaseModel

class Project(BaseModel):
    __tablename__ = "projects"

    name = Column(String, nullable=False)
    description = Column(String)
    
    # Foreign Keys
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    
    # Relationships
    owner = relationship("User", back_populates="projects")
    tasks = relationship("Task", back_populates="project") 