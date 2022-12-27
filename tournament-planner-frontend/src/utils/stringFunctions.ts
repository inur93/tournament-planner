import { format, getMonth, getYear } from 'date-fns';
import { Match, Player } from '../api';

export const cutAt = (str: string | null | undefined, length: number) => {
    if (!str) {
        return '';
    }
    if (str.length <= length) {
        return str;
    }
    const cutAt = str.substring(0, length).lastIndexOf(' ');

    return str.substring(0, cutAt) + '...';
}

export const formatSeasonName = (from: Date, to: Date) => {
    if (getYear(from) < getYear(to)) {
        return `${format(from, 'yyyy')}/${format(to, 'yyyy')}`
    }
    if (getMonth(from) < getMonth(to)) {
        return `${format(from, 'MM/yy')}-${format(to, 'MM/yy')}`
    }

    return `${format(from, 'dd. MMM')}-${format(to, 'dd. MMM')}`
}

export const formatMatchName = (match: Match) => {
    if (match.awayTeam?.isNc && !match.homeTeam?.isNc) {
        return `vs ${match.homeTeam?.name}`;
    }
    if (!match.awayTeam?.isNc && match.homeTeam?.isNc) {
        return `vs ${match.awayTeam?.name}`;
    }
    return `${match.homeTeam?.name} vs ${match.awayTeam?.name}`;
}

export const formatMatchScore = (match: Match) => {
    return `${match.homeScore}-${match.awayScore}`;
}

export const formatPlayerName = (player?: Player) => {
    return player?.nickname || player?.name || 'unknown'; 
}