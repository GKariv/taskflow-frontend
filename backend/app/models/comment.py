from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from .base import BaseModel

class Comment(BaseModel):
    __tablename__ = "comments"

    content = Column(String, nullable=False)
    
    # Foreign Keys
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    task_id = Column(Integer, ForeignKey("tasks.id"), nullable=False)
    
    # Relationships
    author = relationship("User", back_populates="comments")
    task = relationship("Task", back_populates="comments") 