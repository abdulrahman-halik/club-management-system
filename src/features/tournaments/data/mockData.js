export const TOURNAMENTS = [
    {
        id: 't1',
        name: 'United Premier League 2024',
        season: '2024',
        status: 'Ongoing',
        format: 'T20',
        startDate: '2024-03-01',
        endDate: '2024-04-15',
        organizer: 'United Cricket Club',
        banner: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop', // Placeholder
        teams: ['team1', 'team2', 'team3', 'team4']
    },
    {
        id: 't2',
        name: 'Winter Cup 2023',
        season: '2023',
        status: 'Completed',
        format: 'T10',
        startDate: '2023-11-10',
        endDate: '2023-11-25',
        organizer: 'United Cricket Club',
        banner: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop',
        winner: 'team1',
        teams: ['team1', 'team2', 'team5', 'team6']
    }
];

export const TEAMS = [
    {
        id: 'team1',
        name: 'Red Dragons',
        logo: 'https://ui-avatars.com/api/?name=Red+Dragons&background=ef4444&color=fff&size=200',
        captain: 'p1',
        players: ['p1', 'p2', 'p3', 'p4', 'p5']
    },
    {
        id: 'team2',
        name: 'Blue Thunder',
        logo: 'https://ui-avatars.com/api/?name=Blue+Thunder&background=3b82f6&color=fff&size=200',
        captain: 'p6',
        players: ['p6', 'p7', 'p8', 'p9', 'p10']
    },
    {
        id: 'team3',
        name: 'Green Warriors',
        logo: 'https://ui-avatars.com/api/?name=Green+Warriors&background=22c55e&color=fff&size=200',
        captain: 'p11',
        players: ['p11', 'p12', 'p13', 'p14', 'p15']
    },
    {
        id: 'team4',
        name: 'Yellow Strikers',
        logo: 'https://ui-avatars.com/api/?name=Yellow+Strikers&background=eab308&color=fff&size=200',
        captain: 'p16',
        players: ['p16', 'p17', 'p18', 'p19', 'p20']
    },
    {
        id: 'team5',
        name: 'Black Panthers',
        logo: 'https://ui-avatars.com/api/?name=Black+Panthers&background=000000&color=fff&size=200',
        captain: 'p21',
        players: ['p21']
    },
    {
        id: 'team6',
        name: 'White Sharks',
        logo: 'https://ui-avatars.com/api/?name=White+Sharks&background=ffffff&color=000&size=200',
        captain: 'p22',
        players: ['p22']
    }
];

export const PLAYERS = [
    { id: 'p1', name: 'Abdul Raheem', role: 'Batsman', teamId: 'team1', avatar: null },
    { id: 'p2', name: 'John Doe', role: 'Bowler', teamId: 'team1', avatar: null },
    { id: 'p3', name: 'Jane Smith', role: 'All-Rounder', teamId: 'team1', avatar: null },
    { id: 'p6', name: 'Michael Chen', role: 'Batsman', teamId: 'team2', avatar: null },
    { id: 'p7', name: 'Sarah Jones', role: 'Bowler', teamId: 'team2', avatar: null },
    { id: 'p11', name: 'David Wilson', role: 'Wicket Keeper', teamId: 'team3', avatar: null },
    { id: 'p16', name: 'Emily Brown', role: 'Batsman', teamId: 'team4', avatar: null },
    // ... add more players as needed
];

export const FIXTURES = [
    {
        id: 'm1',
        tournamentId: 't1',
        matchNumber: 1,
        date: '2024-03-01T10:00:00',
        team1Id: 'team1',
        team2Id: 'team2',
        venue: 'City Stadium',
        status: 'Completed',
        result: 'Red Dragons won by 20 runs',
        scores: {
            team1: { runs: 180, wickets: 4, overs: 20 },
            team2: { runs: 160, wickets: 9, overs: 20 }
        },
        motm: 'p1'
    },
    {
        id: 'm2',
        tournamentId: 't1',
        matchNumber: 2,
        date: '2024-03-02T14:00:00',
        team1Id: 'team3',
        team2Id: 'team4',
        venue: 'City Stadium',
        status: 'Upcoming',
        result: null,
        scores: null
    },
    {
        id: 'm3',
        tournamentId: 't1',
        matchNumber: 3,
        date: '2024-03-05T10:00:00',
        team1Id: 'team1',
        team2Id: 'team3',
        venue: 'Park Ground',
        status: 'Upcoming',
        result: null,
        scores: null
    }
];

export const POINTS_TABLE = [
    { tournamentId: 't1', teamId: 'team1', played: 1, won: 1, lost: 0, tied: 0, nr: 0, points: 2, nrr: 1.000 },
    { tournamentId: 't1', teamId: 'team2', played: 1, won: 0, lost: 1, tied: 0, nr: 0, points: 0, nrr: -1.000 },
    { tournamentId: 't1', teamId: 'team3', played: 0, won: 0, lost: 0, tied: 0, nr: 0, points: 0, nrr: 0 },
    { tournamentId: 't1', teamId: 'team4', played: 0, won: 0, lost: 0, tied: 0, nr: 0, points: 0, nrr: 0 },
];

export const PLAYER_STATS = [
    { tournamentId: 't1', playerId: 'p1', runs: 85, wickets: 0, matches: 1, highAmt: 85, fifties: 1, hundreds: 0, bestBowling: '0/10' },
    { tournamentId: 't1', playerId: 'p6', runs: 60, wickets: 0, matches: 1, highAmt: 60, fifties: 1, hundreds: 0, bestBowling: '-' },
    { tournamentId: 't1', playerId: 'p2', runs: 10, wickets: 3, matches: 1, highAmt: 10, fifties: 0, hundreds: 0, bestBowling: '3/25' },
    { tournamentId: 't1', playerId: 'p7', runs: 5, wickets: 2, matches: 1, highAmt: 5, fifties: 0, hundreds: 0, bestBowling: '2/30' },
];
