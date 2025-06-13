from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from .base import BaseModel

class Notification(BaseModel):
    __tablename__ = "notifications"

    message = Column(String, nullable=False)
    is_read = Column(Boolean, default=False)
    
    # Foreign Keys
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    
    # Relationships
    user = relationship("User", back_populates="notifications") 