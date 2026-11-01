import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Configuração para o calendário ficar em português
LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
};
LocaleConfig.defaultLocale = 'pt-br';

const calendarState = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.calendarCard}>
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#E8E8E8', // Cor de destaque
              selectedTextColor: '#000000',
            },
          }}
          theme={{
            calendarBackground: 'transparent',
            monthTextColor: '#000000',
            textSectionTitleColor: '#000000',
            dayTextColor: '#000000',
            todayTextColor: '#000000',
            arrowColor: '#000000',
            textDayFontSize: 14,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 12,
            textMonthFontWeight: 'bold',
            'stylesheet.calendar.main': {
              week: {
                flexDirection: 'row',
                justifyContent: 'space-around',
              },
            },
          }}
        />
      </View>
    </View>
  );
};

export default calendarState;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: 230,
    height: 280,
    alignItems: 'left',
  },
  calendarCard: {
    backgroundColor: '#F7CF3757',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderColor: '#F7CF37',
    borderWidth: 3,
    borderRadius: 16,
    overflow: 'hidden',
  },
  calendar: {
    backgroundColor: 'transparent',
  },
});
