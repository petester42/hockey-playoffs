import Conference from "./Conference"
import Team from "./Team"

export class Series {
    seasonId: string;
    topTeam: Team;
    bottomTeam: Team;
    conference: Conference;
    seed: number;
    round: number;
    topWins: number;
    bottomWins: number;
    hasGameToday: boolean;

    constructor() {
        this.topTeam = new Team();
        this.bottomTeam = new Team();
    }
}

export default Series