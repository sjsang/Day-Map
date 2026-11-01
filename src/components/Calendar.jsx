import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { viVN } from '@mui/x-date-pickers/locales';

import 'dayjs/locale/vi';

const Calendar = ({ selectedDate, onDateChange }) => {
    return (
        <div className="min-h-0 flex-1 overflow-hidden">
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="vi"
                localeText={viVN.components.MuiLocalizationProvider.defaultProps.localeText}
            >
                <DateCalendar
                    value={selectedDate}
                    onChange={(date) => {
                        if (date) {
                            onDateChange(date);
                        }
                    }}

                    sx={{
                        padding: "8px",
                        width: '100%',
                        maxWidth: '100%',
                        height: '100%',
                        maxHeight: 'none',
                        fontFamily: 'inherit',

                        '& .MuiTypography-root, & .MuiPickerDay-root, & .MuiButtonBase-root': {
                            fontFamily: 'inherit',
                        },

                        '& .MuiYearCalendar-root': {
                            width: '100%',
                            maxWidth: '100%',
                            borderRadius: '16px',
                            backgroundColor: '#FFF8FA',
                            color: 'var(--title)',
                        },

                        '& .MuiYearCalendar-button': {
                            color: 'var(--title)',
                            fontFamily: 'inherit',
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: '#FCE4EC',
                            },
                        },

                        '& .MuiYearCalendar-button.Mui-selected, & .MuiYearCalendar-button.Mui-selected:hover, & .MuiYearCalendar-button.Mui-selected:focus': {
                            backgroundColor: '#D66B91',
                            color: '#fff',
                        },

                        '& .MuiDateCalendar-viewTransitionContainer': {
                            flex: 1,
                            minHeight: 0,
                            display: 'flex',
                            flexDirection: 'column',
                        },

                        '& .MuiDateCalendar-viewTransitionContainer > div': {
                            display: 'flex',
                            flex: 1,
                            minHeight: 0,
                        },

                        '& .MuiDayCalendar-root': {
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            height: '100%',
                            minHeight: 0,
                        },

                        '& .MuiDayCalendar-slideTransition': {
                            flex: 1,
                            minHeight: 0,
                            height: '100%',
                        },

                        '& .MuiDayCalendar-monthContainer': {
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        },

                        '& .MuiDayCalendar-header, & .MuiDayCalendar-weekContainer': {
                            justifyContent: 'space-around',
                        },

                        '& .MuiDayCalendar-weekDayLabel': {
                            flex: 1,
                            maxWidth: 'none',
                        },

                        '& .MuiPickerDay-root': {
                            flex: 1,
                            maxWidth: 'none',
                            height: '100%',
                            maxHeight: '56px',
                            aspectRatio: 'auto',
                        },

                        '& .MuiPickerDay-root.Mui-selected, & .MuiPickerDay-root.Mui-selected:hover, & .MuiPickerDay-root.Mui-selected:focus': {
                            backgroundColor: '#D66B91',
                            color: '#fff',
                        },

                        '& .MuiDayCalendar-weekContainer': {
                            flex: 1,
                            minHeight: 0,
                            alignItems: 'center',
                            margin: '2px 0',
                            borderTop: '1px solid #E8B8C9',
                            paddingTop: '4px',
                        },
                    }}

                    dayOfWeekFormatter={(date) => {
                        const day = date.day();

                        return day === 0 ? 'CN' : `T${day + 1}`;
                    }}
                />
            </LocalizationProvider>
        </div>
    );
}

export default Calendar;