"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import('../index/calendar'), { ssr: false });

type FormData = {
  cycle: string;
  duration: string;
  firstDay: string;
};

export default function QuickCalculator(): JSX.Element {
  const [result, setResult] = useState<{
    nextPeriodFirstDate: string;
    nextPeriodEndDate: string;
    ovulationDate: string;
  }>({
    nextPeriodFirstDate: "",
    nextPeriodEndDate: "",
    ovulationDate: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function ErrorMessage({ message }: { message?: string }) {
    return message ? (
      <span className="text-[#FE814B] text-md">{message}</span>
    ) : null;
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const cycle = parseInt(data.cycle, 10);
    const duration = parseInt(data.duration, 10);
    const firstDayDate = new Date(data.firstDay);

    const nextPeriodFirstDate = new Date(firstDayDate);
    nextPeriodFirstDate.setDate(firstDayDate.getDate() + cycle);

    const nextPeriodEndDate = new Date(nextPeriodFirstDate);
    nextPeriodEndDate.setDate(nextPeriodEndDate.getDate() + duration);

    const ovulationDate = new Date(nextPeriodFirstDate);
    ovulationDate.setDate(nextPeriodFirstDate.getDate() - 14);

    setResult({
      nextPeriodFirstDate: nextPeriodFirstDate.toISOString().split("T")[0],
      nextPeriodEndDate: nextPeriodEndDate.toISOString().split("T")[0],
      ovulationDate: ovulationDate.toISOString().split("T")[0],
    });
  };

  return (
    <>
      <h1 className="text-center text-3xl mb-4">快速計算！</h1>
      <div className="flex lg:flex-row lg:justify-center flex-col rounded-lg bg-[#F3F3EB]">
        <div className="p-4">
          <form
            className="flex flex-col gap-4 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="cycle">請輸入月經週期：</label>
            <input
              id="cycle"
              type="number"
              {...register("cycle", {
                required: "此欄位為必填",
                min: { value: 21, message: "生理週期太短，建議向醫生諮詢" },
                max: { value: 42, message: "生理週期太長，建議向醫生諮詢" },
              })}
            />
            <ErrorMessage message={errors.cycle?.message} />

            <label htmlFor="duration">請輸入月經持續天數：</label>
            <input
              id="duration"
              type="number"
              {...register("duration", {
                required: "此欄位為必填",
                min: { value: 3, message: "持續天數太短，建議向醫生諮詢" },
                max: { value: 7, message: "持續天數太長，建議向醫生諮詢" },
              })}
            />
            <ErrorMessage message={errors.duration?.message} />

            <label htmlFor="firstDay">請選擇最近一次的月經起始日：</label>
            <input
              id="firstDay"
              type="date"
              {...register("firstDay", {
                required: "此欄位為必填",
              })}
            />
            <ErrorMessage message={errors.firstDay?.message} />

            <div className="mt-2 ml-auto">
              <button
                type="reset"
                className="border-2 border-[#4C3526] px-6 py-1 rounded-full"
                onClick={() =>
                  setResult({
                    nextPeriodFirstDate: "",
                    nextPeriodEndDate: "",
                    ovulationDate: "",
                  })
                }
              >
                重置
              </button>
              <button
                type="submit"
                className="ml-2 bg-[#4C3526] text-white px-6 py-1 rounded-full"
              >
                計算
              </button>
            </div>
          </form>
        </div>
        <div className="p-4">
          <div className="mb-1 p-2 bg-[#fe814ba2] rounded-sm">
            下一次月經開始日期:{result.nextPeriodFirstDate ? result.nextPeriodFirstDate : "尚未計算"}
          </div>
          <div className="mb-1 p-2 bg-[#fe814ba2] rounded-sm">
            下一次月經結束日期:{result.nextPeriodEndDate ? result.nextPeriodEndDate : "尚未計算"}
          </div>
          <div className="p-2 bg-[#FFDB8Fa2] rounded-sm">
            排卵日:{result.ovulationDate ? result.ovulationDate : "尚未計算"}
          </div>
          <Calendar result={result}/>
        </div>
      </div>
    </>
  );
}
