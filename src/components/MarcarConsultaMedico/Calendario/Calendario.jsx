import React from 'react-native'
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars'
import styles from "../MarcarConsultaMedico.style";

export default function Calendario({ selectedDate, setSelectedDate, todayIs }) {
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
                console.log(day)
                setSelectedDate(day.dateString);
            }}
            markedDates={mark}
        />
    );
}