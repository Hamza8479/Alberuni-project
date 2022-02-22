exports.stratex = (req, res) => {
    const users = [
        {
            "role": 1,
            "firstName": "Mark",
            "lastName": "Otto"
        },
        {
            "role": 1,
            "firstName": "Jacob",
            "lastName": "Thornton"
        },
        {
            "role": 2,
            "firstName": "Brad",
            "lastName": "Pitt"
        },
        {
            "role": 2,
            "firstName": "Tom",
            "lastName": "Hanks"
        },
        {
            "role": 3,
            "firstName": "Raymond",
            "lastName": "Rienks"
        },
        {
            "role": 3,
            "firstName": "Martin",
            "lastName": "Koole"
        }
    ]

    res.json(users)
}

exports.stratexAdd = (req, res) => {
    try {
        const users = [
            {
                "role": 1,
                "firstName": "Mark",
                "lastName": "Otto"
            },
            {
                "role": 1,
                "firstName": "Jacob",
                "lastName": "Thornton"
            },
            {
                "role": 2,
                "firstName": "Brad",
                "lastName": "Pitt"
            },
            {
                "role": 2,
                "firstName": "Tom",
                "lastName": "Hanks"
            },
            {
                "role": 3,
                "firstName": "Raymond",
                "lastName": "Rienks"
            },
            {
                "role": 3,
                "firstName": "Martin",
                "lastName": "Koole"
            }
        ]
        users.push(req.body)
        console.log(req.body);
        console.log(users)
        if (users.firstName === req.body.firstName) {
            return res.status(422).json({ err: "Email already exist" });
        }
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            err: err.message,
        });
    }
}

// remove
exports.stratexDelete = async (req, res) => {
    try {
        const users = [
            {
                "role": 1,
                "firstName": "Mark",
                "lastName": "Otto"
            },
            {
                "role": 1,
                "firstName": "Jacob",
                "lastName": "Thornton"
            },
            {
                "role": 2,
                "firstName": "Brad",
                "lastName": "Pitt"
            },
            {
                "role": 2,
                "firstName": "Tom",
                "lastName": "Hanks"
            },
            {
                "role": 3,
                "firstName": "Raymond",
                "lastName": "Rienks"
            },
            {
                "role": 3,
                "firstName": "Martin",
                "lastName": "Koole"
            }
        ]
        users.pop(req.body)
        res.json(users);
    } catch (err) {
        console.log(err);
        return res.status(400).send("User Delete Failed");
    }
};
