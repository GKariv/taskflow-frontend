FROM python:3.11-slim-bullseye

# Set environment variables
ENV PYTHONPATH=/app
ENV PYTHONUNBUFFERED=1
ENV PIP_NO_CACHE_DIR=1
ENV PIP_DISABLE_PIP_VERSION_CHECK=1
# Add Cargo env vars for Render
ENV CARGO_HOME=/tmp/.cargo
ENV RUSTUP_HOME=/tmp/.rustup

# Set working directory
WORKDIR /app

# Install system dependencies including Rust
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y \
    && . $CARGO_HOME/env

# Add Rust to PATH
ENV PATH="$CARGO_HOME/bin:${PATH}"

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Run migrations and start the application
CMD alembic upgrade head && gunicorn app.main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT --timeout 120 