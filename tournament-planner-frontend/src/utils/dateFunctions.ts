import { format, isSameWeek, isSameYear } from "date-fns";
import daLocale from 'date-fns/locale/da';

export const formatFormDate = (date: Date) => {
    return format(date, 'yyyy-MM-dd');
}

export const formatMatchDateShort = (d: (string | Date)) => {
    if (!d) return '-';
    const date = typeof (d) === 'string' ? new Date(d) : d;
    if (isSameWeek(date, new Date(), { weekStartsOn: 1, locale: daLocale })) {
        return format(date, 'ddd HH:mm');
    }
    if (isSameYear(date, new Date())) {
        return format(date, 'dd/MM HH:mm', { locale: daLocale });
    }
    return format(date, 'dd-MM-yyyy HH:mm', { locale: daLocale });
}

