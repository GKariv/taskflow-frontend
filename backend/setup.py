#!/usr/bin/env python3
from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="taskflow-backend",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "fastapi==0.109.2",
        "uvicorn[standard]==0.27.1",
        "gunicorn==21.2.0",
        "sqlalchemy==2.0.27",
        "psycopg2-binary==2.9.9",
        "alembic==1.13.1",
        "pydantic>=2.0.0,<3.0.0",
        "email-validator==2.1.0.post1",
        "python-jose[cryptography]==3.3.0",
        "passlib[bcrypt]==1.7.4",
        "bcrypt==4.1.2",
        "cryptography==42.0.5",
        "python-multipart==0.0.9",
        "httpx==0.26.0",
        "starlette==0.36.3",
        "python-dotenv==1.0.1",
        "anyio==4.2.0",
        "tenacity==8.2.3",
    ],
    python_requires=">=3.11",
    author="TaskFlow Team",
    author_email="team@taskflow.com",
    description="TaskFlow Backend API",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/GKariv/taskflow-ai-local",
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.11",
    ],
) 