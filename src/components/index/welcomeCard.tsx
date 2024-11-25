import React from "react";

export default function WelcomeCard(): JSX.Element {
  return (
    <>
      <div className="lg:w-[25rem] w-full bg-[#AB9182] rounded-md py-8 px-4 text-[#FFFFFF]">
        <h1 className="text-3xl mb-8">歡迎使用月經 Notebook~</h1>
        <div>
          <p className="text-xl">在這裡你可以：</p>
          <ol className="list-decimal pl-10">
            <li>快速計算下一次的月經日期。</li>
            <li>
              登入/註冊會員，可以記錄過往的月經日期，更精確推敲下一次的月經日期。
            </li>
            <li>登入/註冊會員，可以紀錄每日心情，讓你更了解自己。</li>
          </ol>
        </div>
      </div>
    </>
  );
}
