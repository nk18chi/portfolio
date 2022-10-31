export const formatDate = (date: Date, option: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" }): string => {
  return new Date(date.getTime() + new Date().getTimezoneOffset() * 60 * 1000).toLocaleDateString("en-US", option);
};

type TcalcDiff = {
  year: number;
  month: number;
};

export const calcDiffDate = (start: Date, end: Date): TcalcDiff => {
  const res: TcalcDiff = {
    year: 0,
    month: 0,
  };
  let diff: number = end.getTime() - start.getTime();
  res.year = Math.floor(diff / (60 * 60 * 24 * 365 * 1000));
  diff -= res.year * (60 * 60 * 24 * 365 * 1000);
  if (diff > 0) {
    res.month = Math.floor(diff / (60 * 60 * 24 * 30 * 1000));
    diff -= res.year * (60 * 60 * 24 * 365 * 30 * 1000);
  }
  return res;
};
