# Phase 8: Premier League & Tournament Management

## Overview
Phase 8 introduces advanced features for managing internal Premier Leagues (intra-club tournaments) and general tournament administration. This focuses on statistical tracking, leaderboards, and tournament logistics.

## Detailed Feature Requirements

### 1. Premier League Features
*   **Leaderboards & Statistics**:
    *   **Most Runs (Orange Cap)**: Real-time leaderboard of top run-scorers.
    *   **Most Wickets (Purple Cap)**: Real-time leaderboard of top wicket-takers.
    *   **MVP / Player of the Tournament**: Tracking based on fantasy points or MVP formula.
    *   **Other Stats**: Highest Individual Score, Best Bowling Figures, Most Sixes/Fours, Best Economy Rate, Highest Strike Rate.
*   **Points Table**:
    *   Automated table updating after match results.
    *   Columns: Played, Won, Lost, Tied, N/R, Net Run Rate (NRR), Points.
    *   Highlighting for qualification spots (e.g., Top 4).
*   **Auction / Draft System (Optional)**:
    *   UI to display sold players and team budgets.
    *   Player categorization (Icon, A, B, C categories).

### 2. Tournament Details
*   **General Information**:
    *   Tournament Name, Season/Year, Sponsors/Partners.
    *   Start Date, End Date, Venues.
    *   Tournament Format (T20, T10, ODI, Test).
*   **Teams & Squads**:
    *   List of participating teams with logos.
    *   Squad lists for each team with Captain/Vice-Captain designation.
*   **Fixtures & Results**:
    *   Group Stage matches schedule.
    *   Knockout bracket visualization (Quarter-finals, Semis, Finals).
    *   Match Center link for each fixture (Scorecard, Commentary).
*   **Rules & Regulations**:
    *   Section for specific tournament rules (e.g., Powerplay overs, Super Over rules, Substitution rules).
    *   Downloadable PDF version of the rulebook.

## Technical Considerations
*   **Data Models**:
    *   Complex relationships between Players, Teams, Matches, and Tournaments.
    *   Calculation logic for NRR and MVP points to be handled on the backend service (efficiency).
    *   **Database**: Tables for `Tournaments`, `TournamentTeams`, `TournamentStats`.
*   **Scalability**:
    *   Support for multiple concurrent tournaments (e.g., Summer Cup and Winter League running simultaneously).
*   **Visualization**:
    *   Use charts or graphical representations for run rates or match progress (Worm, Manhattan charts).
*   **Integration**:
    *   Link stats back to main Player Profiles (Phase 4).
