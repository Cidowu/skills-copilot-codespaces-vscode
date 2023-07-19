// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a JSON body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import the comments module
const comment = require('./comments.js');

// Create a route for getting all comments
app.get('/api/comments', (req, res) => {
    comment.getAllComments().then((comments) => {
        res.json(comments);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

// Create a route for adding a comment
app.post('/api/comments', (req, res) => {
    comment.addComment(req.body.name, req.body.comment, req.body.movie_id).then((comment) => {
        res.json(comment);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

// Create a route for deleting a comment
app.delete('/api/comments/:id', (req, res) => {
    comment.deleteComment(req.params.id).then((comment) => {
        res.json(comment);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

// Create a route for updating a comment
app.put('/api/comments/:id', (req, res) => {
    comment.updateComment(req.params.id, req.body.comment).then((comment) => {
        res.json(comment);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});