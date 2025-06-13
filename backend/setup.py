from setuptools import setup, find_packages

setup(
    name="taskflow",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "fastapi==0.109.2",
        "uvicorn[standard]==0.27.1",
        "sqlalchemy==2.0.27",
        "pydantic==2.6.1",
        "python-jose==3.3.0",
        "passlib[bcrypt]==1.7.4",
        "python-multipart==0.0.9",
        "python-dotenv==1.0.1",
        "psycopg2-binary==2.9.10",
        "asyncpg==0.30.0",
        "alembic==1.13.1",
        "gunicorn==21.2.0",
        "email-validator==2.1.0.post1",
        "bcrypt==4.1.2",
        "typing-extensions==4.9.0",
        "starlette==0.36.3",
        "anyio==4.2.0",
        "pytest==8.0.1",
        "httpx==0.26.0",
        "tenacity==8.2.3",
    ],
    python_requires=">=3.11",
    setup_requires=["setuptools>=65.5.1", "wheel>=0.38.4"],
    options={
        "build_ext": {
            "inplace": True,
        },
    },
) 