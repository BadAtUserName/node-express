const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')//¯\_(ツ)_/¯ anyone else feel like it has this vibe?
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

.get((req,res) => {
  res.end('Will send all the campsites to you');
})
.post((req,res) => {
  res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req,res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
  res.end('Deleting all campsites');
});

// New route for '/:campsiteId'
campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
  res.end(`Will send details of the campsite with ID: ${req.params.campsiteId} to you`);
})
.post((req, res) => {
  res.statusCode = 403;
  res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})
.put((req, res) => {
  res.end(`Updating the campsite with ID: ${req.params.campsiteId} 
    with name: ${req.body.name} and description: ${req.body.description}`);
})
.delete((req, res) => {
  res.end(`Deleting campsite with ID: ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;