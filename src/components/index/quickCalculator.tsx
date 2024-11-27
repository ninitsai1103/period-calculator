"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  cycle: string;
  duration: string;
  firstDay: string;
};

export default function QuickCalculator(): JSX.Element {
  const [result, setResult] = useState<{
    nextPeriodDate: string;
    ovulationDate: string;
  }>({
    nextPeriodDate: "",
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
    console.log(data);

    const cycle = parseInt(data.cycle, 10); // 將 cycle 轉為數字
    const duration = parseInt(data.duration, 10); // 將 duration 轉為數字
    const firstDayDate = new Date(data.firstDay); // 將 firstDay 轉為 Date

    // 計算下一次月經日期
    const nextPeriodDate = new Date(firstDayDate);
    nextPeriodDate.setDate(firstDayDate.getDate() + cycle);

    // 計算排卵日
    const ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(nextPeriodDate.getDate() - 14);

    // 設置結果，格式化日期為 YYYY-MM-DD
    setResult({
      nextPeriodDate: nextPeriodDate.toISOString().split("T")[0],
      ovulationDate: ovulationDate.toISOString().split("T")[0],
    });
  };

  return (
    <>
      <h1 className="text-center text-3xl mb-4">快速計算！</h1>
      <div className="flex lg:flex-row flex-col border-4 rounded-lg border-[#F3F3EB]">
        <div className="bg-[#F3F3EB] border-1 border-[#F3F3EB] p-10">
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
                    nextPeriodDate: "",
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
        <div className="p-10">
          <p>
            下一次月經日期:{" "}
            {result.nextPeriodDate ? result.nextPeriodDate : "尚未計算"}
          </p>
          <p>
            排卵日:{" "}
            {result.ovulationDate ? result.ovulationDate : "尚未計算"}
          </p>
        </div>
      </div>
    </>
  );
}
