# ind

## Description

This is a sample Node.js and Angular project that showcases a basic web application. The frontend is built with Angular, while the backend is developed using Node.js. The backend interacts with a `db.json` file to fetch and update data.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project root directory using the terminal/command prompt.

## Backend Setup

1. Go to the `node` directory: `cd node`.
2. Run `npm install` to install all backend dependencies.
3. Create a `db.json` file in the `node` directory (you can use `db.sample.json` as a template).
4. To start the backend server, run: `node server.js`.

## Frontend Setup

1. Go to the `app` directory: `cd app`.
2. Run `npm install` to install all frontend dependencies.

## Usage

1. To run the Angular frontend, go to the `app` directory and execute: `ng serve`.
2. Open your web browser and visit `http://localhost:4200` to access the Angular application.

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/data`: Fetch all data from `db.json`.
- `PUT /api/data/SamplingTime`: Update the data for a specific item with the given `SamplingTime`

## Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, please feel free to open an issue or submit a pull request .


## Contact

For any questions or inquiries, please contact me at sunilbhadu155@gmail.com.
