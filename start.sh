#!/bin/bash

# Try different Python commands
if command -v python3 &> /dev/null; then
    echo "Using python3"
    python3 server.py
elif command -v python &> /dev/null; then
    echo "Using python"
    python server.py
else
    echo "Python not found. Installing..."
    # This is a fallback - in most cases, Python should be available in Railway
    python server.py
fi