from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Enum
from sqlalchemy.orm import relationship
import enum

from .base import BaseModel

class TaskStatus(str, enum.Enum):
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    DONE = "done"
    BLOCKED = "blocked"

class Task(BaseModel):
    __tablename__ = "tasks"

    title = Column(String, nullable=False)
    description = Column(String)
    status = Column(Enum(TaskStatus), default=TaskStatus.TODO)
    due_date = Column(DateTime, nullable=True)
    
    # Foreign Keys
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    project_id = Column(Integer, ForeignKey("projects.id"), nullable=True)
    
    # Relationships
    owner = relationship("User", back_populates="tasks")
    project = relationship("Project", back_populates="tasks")
    comments = relationship("Comment", back_populates="task") 