import { useState } from "react";

const CheckBox = () => {
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setValue([...value, e.target.value]);
    } else setValue(value.filter((e) => e !== e.target.value)); // 체크가 안된 값을 제외해서 새로운
  };

  return (
    <div>
      <label htmlFor="apple">
        <input
          type="checkbox"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
        사과
      </label>
      <br />
      <label htmlFor="orange">
        <input
          type="checkbox"
          name="fruits"
          id="orange"
          value="orange"
          onChange={handleChange}
        />
        오렌지
      </label>
      <br />
      <label htmlFor="strawberry">
        <input
          type="checkbox"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
        딸기
      </label>
      <br />
      <p>Selected value: {value}</p>
    </div>
  );
};

export default CheckBox;
