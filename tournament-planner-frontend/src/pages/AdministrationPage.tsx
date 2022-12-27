import { Button, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Competition, Player, Season } from "../api";
import { CompetitionsApi, PlayersApi, SeasonsApi } from "../apiClient";
import { CompetitionsList } from "../components/competition/CompetitionsList";
import { CreateCompetitionModal } from "../components/competition/CreateCompetitionModal";
import { PlayerList } from "../components/player/PlayerList";
import { CreateSeasonModal } from "../components/season/CreateSeasonModal";
import { SeasonsList } from "../components/season/SeasonList";
import { ButtonContainer } from "../components/shared/ButtonContainer";



export const AdministrationPage = () => {
    const [competitions, setCompetitions] = useState<Competition[]>([]);
    const [seasons, setSeasons] = useState<Season[]>([]);

    const [showCreateCompetition, setShowCompetition] = useState(false);
    const [showCreateSeasons, setShowCreateSeasons] = useState(false);

    const updateCompetitions = () => {
        CompetitionsApi.getCompetitons()
            .then(({ data }) => setCompetitions(data))
    }

    const updateSeasons = () => {
        SeasonsApi.getSeasons()
            .then(({ data }) => setSeasons(data))
    }


    useEffect(() => {
        updateCompetitions();
        updateSeasons();
    }, []);

    const handleCloseCompetitionModal = () => {
        setShowCompetition(false);
        updateCompetitions();
    }

    const handleCloseSeasonModal = () => {
        setShowCreateSeasons(false);
        updateSeasons();
    }

    return <Grid container justifyContent='space-around' spacing={'1rem'} alignItems='stretch'>

        <Grid item xs={12} sm={11} md={5}>
            <ButtonContainer>
                <Button component={Link} to='/admin/player'>Squad</Button>
                <Button component={Link} to="/admin/match/import">Import matches</Button>
            </ButtonContainer>
        </Grid>
        <Grid item xs={12} sm={11} md={5}></Grid>

        <Grid item xs={12} sm={11} md={5}>
            <Typography variant='h2'>Competitions</Typography>
            <ButtonContainer>
                <Button onClick={() => setShowCompetition(true)}>New</Button>

            </ButtonContainer>
            <CompetitionsList items={competitions} />
            {showCreateCompetition &&
                <CreateCompetitionModal open={showCreateCompetition} onClose={handleCloseCompetitionModal} />
            }
        </Grid>

        <Grid item xs={12} sm={11} md={5} >
            <Typography variant='h2'>Seasons</Typography>
            <ButtonContainer>
                <Button onClick={() => setShowCreateSeasons(true)}>New</Button>
            </ButtonContainer>
            <SeasonsList items={seasons} />
            {showCreateSeasons &&
                <CreateSeasonModal open={showCreateSeasons} onClose={handleCloseSeasonModal} />
            }
        </Grid>


    </Grid>
}