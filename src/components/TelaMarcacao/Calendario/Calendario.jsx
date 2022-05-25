import React from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import styles from "./Calendario.style";
import { brazilLanguage } from '../../../util/LocalizacaoCalendario'

export default function Calendario({ selectedDate, setSelectedDate, todayIs }) {
    LocaleConfig.locales['br'] = {
        monthNames: brazilLanguage.monthNames,
        monthNamesShort: brazilLanguage.dayNamesShort,
        dayNames: brazilLanguage.dayNames,
        dayNamesShort: brazilLanguage.dayNamesShort,
        today: brazilLanguage.today
    };
    LocaleConfig.defaultLocale = 'br';
    const mark = {
        [selectedDate]: { selected: true, selectedColor: '#6EC84E' },
    }
    return (
        <Calendar
            style={styles.calendar}
            minDate={todayIs}
            enableSwipeMonths={true}
            disableAllTouchEventsForDisabledDays={true}
            onDayPress={day => {
                // console.log(day)
                setSelectedDate(day.dateString);
            }}
            markedDates={mark}
        />
    );
}