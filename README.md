# Node.js HTTPS Server with Clustering

This project demonstrates how to set up an HTTPS server in Node.js with SSL/TLS support, clustering to utilize multiple CPU cores, and error handling.

## Features
- HTTPS server with SSL/TLS encryption.
- Clustering support to use all available CPU cores for better performance.
- Graceful error handling to avoid crashing on uncaught exceptions or unhandled rejections.

## Prerequisites
Before running the server, you need to have the following:
- Node.js installed (version 12 or higher recommended).
- A valid SSL certificate (`cert.pem`) and private key (`key.pem`).

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/NetroIndonesia/your-repo-name.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```

3. Install necessary dependencies (if applicable):
    ```bash
    npm install
    ```

4. Place your SSL certificate and private key in a `cert/` directory:
    - `cert/key.pem`: Your private key file.
    - `cert/cert.pem`: Your certificate file.

## Usage

To start the server, run the following command:

```bash
node index.js
