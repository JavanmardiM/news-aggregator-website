
## How to Run the App Locally

follow these steps:

1. Clone the repository

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

The app will be running at [http://localhost:3000](http://localhost:3000).

## How to Run the App in Docker

To run the app in a Docker container, follow these steps:

1. Download and install Docker engine on your system
   [https://docs.docker.com/desktop/](https://docs.docker.com/desktop).

2. Check if everything is installed by typing this command in terminal:
   docker

3. Build the Docker image:
   docker build -t news-aggregator-website .

4. Make sure if your docker engine is running in the background

5. Run the Docker container:
   docker run -p 3000:3000 news-aggregator-website

The app will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.
