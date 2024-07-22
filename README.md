# File System API

This project provides a simple NodeJS API for file system operations, including creating a text file with the current timestamp and retrieving all text files in a specified folder.

## Project Structure
```perl
file-system-api/
├── files/ # Folder where text files will be stored
├── node_modules/ # NodeJS dependencies
├── .gitignore # Git ignore file
├── package.json # NodeJS project metadata and dependencies
├── package-lock.json # Exact dependency versions
└── server.js # Main server file
```


## Setup

### Prerequisites

- NodeJS and npm installed on your machine.
- Postman for testing the API endpoints.

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Bharath-Parthipan/File-System-Api.git
   cd file-system-api
2. **Install dependencies**:
    ```sh
    npm install

### Running the Server
    To start the Express server, run:
    ```sh
    npm start
The server will start on "http://localhost:3000."

## API Endpoints

1. Create a Text File
    - Endpoint: POST /create-file
    - Description: Creates a new text file with the current timestamp as its content. The filename is the current date-time in ISO format.
    - Response:
        - 200: File created successfully
        - 500: Error creating file
2. Retrieve All Text Files
    - Endpoint: GET /files
    - Description: Retrieves all text files in the specified folder.
    - Response:
        - 200: JSON array of filenames (e.g., ["2023-07-21T15-22-10-123Z.txt"])
        - 500: Error reading folder