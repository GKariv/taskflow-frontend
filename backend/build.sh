#!/usr/bin/env bash
# exit on error
set -o errexit

# Upgrade pip and install build tools
pip install --upgrade pip setuptools wheel

# Install dependencies
pip install --no-cache-dir -r requirements.txt

# Run database migrations
alembic upgrade head

echo "Build completed successfully!" 