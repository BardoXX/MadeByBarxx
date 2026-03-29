#!/bin/bash

# Function to display messages
echo_green() {
  echo -e "\033[0;32m$1\033[0m"
}

echo_yellow() {
  echo -e "\033[0;33m$1\033[0m"
}

echo_red() {
  echo -e "\033[0;31m$1\033[0m"
}

# Start Frontend
echo_yellow "Starting Frontend (Next.js)..."
(cd apps/web && bun run dev) &
FRONTEND_PID=$!
echo_green "Frontend started in background (PID: $FRONTEND_PID)."

# Start Backend
echo_yellow "Starting Backend (Express API)..."
(cd apps/api && bun --hot --watch index.ts) &
BACKEND_PID=$!
echo_green "Backend started in background (PID: $BACKEND_PID)."

echo_green "
Both Frontend and Backend are running. Press Ctrl+C to stop them."

# Wait for background jobs to complete (optional, keeps the script alive)
# In many cases, the script can exit and background processes will continue.
# If you need a way to manage/stop them, more advanced scripting is needed.
wait $FRONTEND_PID $BACKEND_PID
