import React, { useState } from "react";

export default function AppForm() {
  //연관된 데이터라면 하나의 객체로 관리하는것이 더 효율적이다.
  const [form, setFrom] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    //⭐️객체의 key값을 동적으로 할당할 때에는 []형식으로 사용해야함
    setFrom({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
