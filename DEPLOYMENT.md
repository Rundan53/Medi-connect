# Medi-Connect Deployment Overview

Author: Himchan Bae

## Deployment Information

### Application Links

- **Frontend**: [https://mediconnect-f4mm.onrender.com/](https://mediconnect-f4mm.onrender.com/)
- **Backend**: [https://mediconnect-server.onrender.com/](https://mediconnect-server.onrender.com/)
- **User List**: [https://mediconnect-server.onrender.com/api/users](https://mediconnect-server.onrender.com/api/users)
- **Schedule List**: [https://mediconnect-server.onrender.com/api/schedules](https://mediconnect-server.onrender.com/api/schedules)

---

## Project Setup and Build Instructions

### Prerequisites

Ensure you have Yarn and Node.js installed. For this project, it is **recommended** to use **Node.js 20.x** to align with the primary CI environment. However, any version within **18.x, 20.x, or 22.x** is compatible, as our CI process supports these versions.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the backend server:
   ```bash
   yarn server
   ```

If another developer takes over, they can follow these instructions to set up the environment and start the servers for both the frontend and backend.

---

## Continuous Integration (CI) Information

### Manual CI Checks (Frontend)

During development, I used custom CI commands to maintain code formatting:

- **CI Check**: `yarn ci-check`
- **Custom Commands**:
  - `"ci-check": "yarn format:diff"`
  - `"format": "prettier --write \"**/*.{js,md,scss}\""`
  - `"format:diff": "prettier --list-different \"**/*.{js,md,scss}\""`

### Automated CI with GitHub Actions

For the final stage, I implemented GitHub Actions to automate the CI checks. This setup ensures that each push and pull request to the main branch automatically triggers the CI checks, confirming code quality and adherence to project standards.
