// users Array
let users = [{
        id: 1,
        firstname: "chinedu",
        lastname: "Adabanya",
        othernames: "Echutem",
        email: "adabanyachinedu@gmail.com",
        phoneNumber: "07037425529",
        username: "Eduboy",
        registered: 'Mon Jan 01 2015',
        isAdmin: true,
    }, {
        id: 2,
        firstname: "chined",
        lastname: "Adabany",
        othernames: "Echute",
        email: "adabanyachined@gmail.com",
        phoneNumber: "0703742552",
        username: "Edubo",
        registered: 'Tues Feb 02 2015',
        isAdmin: false,
    }, {
        id: 3,
        firstname: "chine",
        lastname: "Adaban",
        othernames: "Echut",
        email: "adabanyachine@gmail.com",
        phoneNumber: "070374255",
        username: "Edub",
        registered: 'Wed March 03 2015',
        isAdmin: true,
    },
    {
        id: 4,
        firstname: "chin",
        lastname: "Adaba",
        othernames: "Echu",
        email: "adabanyachin@gmail.com",
        phoneNumber: "07037425",
        username: "Edu",
        registered: 'Thurs April 04 2015',
        isAdmin: false,
    }
];

//incidents Array
let incidents = [{
        id: 1,
        createdOn: 'Mon Jan 01 2015',
        createdBy: 2, // represents the user who created this record
        type: "intervention", // [red-flag, intervention]
        location: "50, 57", // Lat Long coordinates
        status: "draft", // [draft, under investigation, resolved, rejected]
        Images: ["Img1", "Img2"],
        Videos: ["vid1", "vid2"],
        comment: "ver shocking news"
    },
    {
        id: 2,
        createdOn: 'Tues Feb 02 2015',
        createdBy: 4, // represents the user who created this record
        type: "red-flag", // [red-flag, intervention]
        location: "40, 47", // Lat Long coordinates
        status: "under investigation", // [draft, under investigation, resolved, rejected]
        Images: ["Img1", "Img2"],
        Videos: ["vid1", "vid2"],
        comment: "so so hilarious"
    },
    {
        id: 3,
        createdOn: 'Wed March 03 2015',
        createdBy: 2, // represents the user who created this record
        type: "intervention", // [red-flag, intervention]
        location: "30, 37", // Lat Long coordinates
        status: "resolved", // [draft, under investigation, resolved, rejected]
        Images: ["Img1", "Img2"],
        Videos: ["vid1", "vid2"],
        comment: "U wont blieve it"
    },
    {
        id: 4,
        createdOn: 'Thurs April 04 2015',
        createdBy: 4, // represents the user who created this record
        type: "red-flag", // [red-flag, intervention]
        location: "20, 27", // Lat Long coordinates
        status: "rejected", // [draft, under investigation, resolved, rejected]
        Images: ["Img1", "Img2"],
        Videos: ["vid1", "vid2"],
        comment: "I'm all ears, tell me shumtin"
    }
]

"use strict";


module.exports.users = users;
module.exports.incidents = incidents;