const express = require('express')
var bodyParser = require('body-parser');
const db1 = require('./db/db1');
// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all red-flags
app.get('/api/v1/red-flags', (req, res) => {
    const redflags = [];
    db1.incidents.map((incident) => {
        if (incident.type === "red-flag") {
            redflags.push(incident);
        }

    })
    return res.send({
        status: 200,
        data: redflags
    })
});
// get all interventions
app.get('/api/v1/interventions', (req, res) => {
    const interventions = [];
    db1.incidents.map((incident) => {
        if (incident.type === "intervention") {
            interventions.push(incident);
        }

    })
    return res.send({
        status: 200,
        data: interventions
    })
});

//get a single red-flag
app.get('/api/v1/red-flags/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    db1.incidents.map((incident) => {
        if (incident.id === id) {
            if (incident.type === "red-flag") {
                return res.send({
                    status: 200,
                    data: [incident]
                })
            }

            return res.send({
                status: 404,
                error: "resource not found for red-flag id: " + id

            })

        }
    })

});

//get a single intervention
app.get('/api/v1/interventions/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    db1.incidents.map((incident) => {
        if (incident.id === id) {
            if (incident.type === "intervention") {
                return res.send({
                    status: 200,
                    data: [incident]
                })
            }

            return res.send({
                status: 404,
                error: "resource not found for intervention id: " + id

            })
        }
    })
});

// red-flags post
app.post('/api/v1/red-flags', (req, res) => {
    if (!req.body.location) {
        return res.send({
            status: 400,
            error: 'location is required'
        });
    } else if (!(req.body.Images || req.body.Videos)) {
        return res.send({
            status: 400,
            error: 'Please an image or a video is required'
        });
    }
    const incident = {
        id: db1.incidents.length + 1,
        createdOn: req.body.createdOn,
        createdBy: req.body.createdBy,
        type: req.body.type,
        location: req.body.location,
        status: req.body.status,
        Images: req.body.Images,
        Videos: req.body.Videos,
        comment: req.body.comment
    }
    db1.incidents.push(incident);
    return res.send({
        status: 200,
        data: [{
            id: incident.id,
            message: "created red-flag record"
        }]
    })
});

// intervention post
app.post('/api/v1/interventions', (req, res) => {
    if (!req.body.location) {
        return res.send({
            status: 400,
            error: 'location is required'
        });
    } else if (!(req.body.Images || req.body.Videos)) {
        return res.send({
            status: 400,
            error: 'Please an image or a video is required'
        });
    }
    const incident = {
        id: db1.incidents.length + 1,
        createdOn: req.body.createdOn,
        createdBy: req.body.createdBy,
        type: req.body.type,
        location: req.body.location,
        status: req.body.status,
        Images: req.body.Images,
        Videos: req.body.Videos,
        comment: req.body.comment
    }
    db1.incidents.push(incident);
    return res.send({
        status: 200,
        data: [{
            id: incident.id,
            message: "created intervention record"
        }]
    })
});

//patch location for red-flag location
app.patch('/api/v1/red-flags/:id/location', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!req.body.location) {
        return res.send({
            status: 400,
            error: "location is required"

        });
    }
    db1.incidents.map((incident) => {
        if (incident.id === id) {
            if (incident.type === "red-flag") {
                incident.location = req.body.location;
            } else {
                return res.send({
                    status: 404,
                    error: " red-flag id: " + id + " not found"

                })
            }
        }
    });



    return res.send({
        status: 200,
        data: [{
            id: id,
            message: "Updated red-flag record's location"
        }]
    });
});

//patch location for intervention location
app.patch('/api/v1/interventions/:id/location', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!req.body.location) {
        return res.send({
            status: 400,
            error: "location is required"

        });
    }
    db1.incidents.map((incident) => {
        if (incident.id === id) {
            if (incident.type === "intervention") {
                incident.location = req.body.location;
            } else {
                return res.send({
                    status: 404,
                    error: " intervention id: " + id + " not found"

                })
            }
        }
    });
    return res.send({
        status: 200,
        data: [{
            id: id,
            message: "Updated intervention record's location"
        }]
    });
});


//patch comment for a red-flag record
app.patch('/api/v1/red-flags/:id/comment', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!req.body.comment) {
        return res.send({
            status: 400,
            error: "comment is required"

        });
    }
    db1.incidents.map((incident) => {
        if (incident.id === id) {
            if (incident.type === "red-flag") {
                incident.comment = req.body.comment;
            } else {
                return res.send({
                    status: 404,
                    error: " red-flag id: " + id + " not found"

                })
            }
        }
    });

    return res.send({
        status: 200,
        data: [{
            id: id,
            message: "Updated red-flag record's comment"
        }]
    });
});

//patch comment for a intervention record
app.patch('/api/v1/interventions/:id/comment', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (!req.body.comment) {
        return res.send({
            status: 400,
            error: "comment is required"

        });
    }
    db1.incidents.map((incident) => {
        if (incident.id === id) {
            if (incident.type === "intervention") {
                incident.comment = req.body.comment;
            } else {
                return res.send({
                    status: 404,
                    error: " intervention id: " + id + " not found"

                })
            }
        }
    });

    return res.send({
        status: 200,
        data: [{
            id: id,
            message: "Updated intervention record's comment"
        }]
    });
});

//delete a red-flag record..
app.delete('/api/v1/red-flags/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    db1.incidents.map((incident, index) => {
        if (incident.id === id) {
            if (incident.type === "red-flag") {
                db1.incidents.splice(index, 1);
                return res.send({
                    status: 200,
                    data: [{
                        id: id,
                        message: "red-flag record has been deleted"
                    }]
                });
            } else {

                return res.send({
                    status: 404,
                    error: "red-flag record not found"
                });
            }
        }

    });

});

//delete an intervention record..
app.delete('/api/v1/interventions/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    db1.incidents.map((incident, index) => {
        if (incident.id === id) {
            if (incident.type === "intervention") {
                db1.incidents.splice(index, 1);
                return res.send({
                    status: 200,
                    data: [{
                        id: id,
                        message: "intervention record has been deleted"
                    }]
                });
            } else {

                return res.send({
                    status: 404,
                    error: "intervention record not found"
                });
            }
        }

    });

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});