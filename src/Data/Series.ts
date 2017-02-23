import Conference from "./Conference"

class Series {
    seasonId: string;
    topTeamId: string;
    bottomTeamId: string;
    conference: Conference;
    seed: number;
    round: number;
    topWins: number;
    bottomWins: number;
    hasGameToday: boolean;
}

export default Series