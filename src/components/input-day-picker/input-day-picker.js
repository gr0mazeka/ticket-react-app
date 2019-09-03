import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import './input-day-picker.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

const FORMAT = 'dd.MM.yyyy';
const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const WEEKDAYS_LONG = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export default function InputDayPicker(props) {
  return (
    <DayPickerInput
      // selectDate={props.date}
      value={props.date}
      formatDate={formatDate}
      format={FORMAT}
      parseDate={parseDate}
      placeholder={props.placeholder}
      // showOverlay
      // placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
      // onDayChange={(day) => console.log(day)}
      onDayChange={props.onChangeDate}
      dayPickerProps={{
        disabledDays: {
          after: new Date(2019, 8, 20),
          before: new Date(2019, 7, 1),
        },
        selectedDays: props.date,
        // fixedWeeks: true,
        // showOutsideDays: true,
        // todayButton: 'Текущая дата',
        months: MONTHS,
        weekdaysLong: WEEKDAYS_LONG,
        weekdaysShort: WEEKDAYS_SHORT,
        firstDayOfWeek: 1,
      }}
    />
  );
}
