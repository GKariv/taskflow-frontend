#!/bin/bash
# exit on error
set -o errexit

# Upgrade pip
pip install --upgrade pip

# Install build tools
pip install --upgrade setuptools wheel

# Install dependencies with legacy resolver
pip install --use-deprecated=legacy-resolver -r requirements.txt

# Install the package in development mode
pip install -e .

# Run database migrations
alembic upgrade head

echo "Build completed successfully!" 