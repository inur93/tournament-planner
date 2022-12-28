﻿namespace TournamentPlanner.Backend.Contracts.Tournament;

public class TournamentDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    
    public DateTime Date { get; set; }

    public string TournamentType { get; set; }
}
