#!/bin/bash

# Stop on error
set -e

echo "🔁 Starting deployment..."

# Define source and destination
SOURCE_DIR="dist/"
DEST_DIR="../"

# Check if dist exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ dist/ folder not found!"
  exit 1
fi

# Copy with overwrite
cp -r "$SOURCE_DIR"* "$DEST_DIR"

echo "✅ Deployment complete: Files moved from $SOURCE_DIR to $DEST_DIR"
