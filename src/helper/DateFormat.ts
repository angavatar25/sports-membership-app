import moment from "moment";

interface TDate {
  date: string;
  start_time: string;
  end_time: string;
};

export const FormatClassDate = (currDate: TDate) => {
  const { date, start_time, end_time } = currDate;

  const start = moment(`${date} ${start_time}`, 'YYYY-MM-DD HH.mm.ss')
  const end = moment(`${date} ${end_time}`, 'YYYY-MM-DD HH.mm.ss')

  const formatted = `${start.format('DD MMMM YYYY')}, ${start.format('HH.mm')} - ${end.format('HH.mm')}`

  return formatted;
};

export const FormatDate = (currDate: string) => {
  return moment(currDate).format('D MMMM YYYY');
}