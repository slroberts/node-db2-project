const express = require('express');
const cors = require('cors');
const CarsRouter = require ('../cars/cars-router.js')

const server = express();

server.use(cors());
server.use(logger)
server.use(express.json());
server.use('/api/cars', CarsRouter);

server.get('/', (req, res) => {
    res.status(200).json({api: "up"})
})

function logger(req, res, next) {
    console.log(
        `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
          "host"
        )}`
      );

      next();
}

module.exports = server;