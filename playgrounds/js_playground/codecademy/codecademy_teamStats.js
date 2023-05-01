const team = {
    _players: [
        {
            firstName: "Dan",
            lastName: "Smith",
            age: 30,
        },
        {
            firstName: "Matt",
            lastName: "Monroe",
            age: 27,
        },
        {
            firstName: "Kyle",
            lastName: "Chugo",
            age: 26,
        },
    ],
    _games: [
        {
            opponent: "KFC",
            teamPoints: 57,
            opponentPoints: 88,
        },
        {
            opponent: "CSKA",
            teamPoints: 80,
            opponentPoints: 90,
        },
        {
            opponent: "Blya",
            teamPoints: 70,
            opponentPoints: 45,
        },
    ],
    get players() {
        if (this._players) {
            return this._players;
        } else {
            return "No players in the team";
        }
    },
    get games() {
        if (this._games) {
            return this._games;
        } else {
            return "No players in the team";
        }
    },
    addPlayer(firstName, lastName, age) {
        if (
            typeof firstName === "string" &&
            typeof lastName === "string" &&
            typeof age === "number"
            ) {
                this._players.push({
                    firstName,
                    lastName,
                    age,
                });
            } else {
                console.log(
                    "ERROR! The player was not added => Specify full name and age in correct format."
                    );
                }
            },
            addGame(opponent, teamPoints, opponentPoints) {
                if (
                    typeof opponent === "string" &&
                    typeof teamPoints === "number" &&
                    typeof opponentPoints === "number"
                    ) {
                        this._games.push({
                            opponent,
                            teamPoints,
                            opponentPoints
                        })
                    } else {
                        console.log(
                            "ERROR! The game was not added => Specify opponent, team points and opponent points in correct format."
                            );
                        }
                    },
                };
                
                team.addPlayer("Bugs", "Bunny", 76);
                console.log(team.players);
                
                team.addGame('Titans', 100, 98);
                console.log(team.games);
                