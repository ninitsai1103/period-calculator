import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import { styled } from "@mui/material/styles";
import isBetween from "dayjs/plugin/isBetween"; // 正確引入插件

dayjs.extend(isBetween); // 啟用插件

export default function Calendar({
  result,
}: {
  result: {
    nextPeriodFirstDate: string;
    nextPeriodEndDate: string;
    ovulationDate: string;
  };
}): JSX.Element {
  //字串轉型成日期
  const nextPeriodFirstDate = dayjs(result.nextPeriodFirstDate);
  const nextPeriodEndDate = dayjs(result.nextPeriodEndDate);
  const ovulationDate = dayjs(result.ovulationDate);

  // 自訂日期樣式
const StyledPickersDay = styled(PickersDay)(() => ({
  "&.highlight": {
    backgroundColor: "#FE814B",
    color: "#4B3327",
  },
  "&.ovulation": {
    backgroundColor: "#FFDB8F",
    color: "#4B3327",
  },
  "&.range-highlight": {
    backgroundColor: "#FE814B",
    color: "#4B3327",
  },
}));

// 自訂日期渲染
const CustomDay = (props: PickersDayProps<Dayjs>) => {
  const { day, selected, ...other } = props;

  // 判斷是否有資料
  const hasData = nextPeriodFirstDate.isValid() && nextPeriodEndDate.isValid() && ovulationDate.isValid();

  const isHighlighted = hasData && (day.isSame(nextPeriodFirstDate, "day") || day.isSame(nextPeriodEndDate, "day"));
  const isOvulation = hasData && day.isSame(ovulationDate, "day");
  const isInRange = hasData && day.isBetween(nextPeriodFirstDate, nextPeriodEndDate, "day", "[]");

  return (
    <StyledPickersDay
      {...other}
      day={day}
      selected={selected}
      className={`${isHighlighted ? "highlight" : ""} ${
        isOvulation ? "ovulation" : ""
      } ${isInRange && !isHighlighted ? "range-highlight" : ""}`}
      style={{ backgroundColor: !hasData ? "transparent" : undefined }}
    />
  );
};



  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        slots={{day: CustomDay}}
      />
      </LocalizationProvider>
    </>
  );
}
