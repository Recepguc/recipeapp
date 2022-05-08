import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyles";

const Form = ({ setQuery, setMeal, getData, mealTypes }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Normal şartlarda search linkine tıklandığında, form gönderilir, (breakfast tıklanmış gibi). biz aşağıdaki şekilde bir yapı kullanırsak ve tıklanma olayında e.preventDefault(); dersek  nesnenin o anki işlevini iptal edip devamında kod varsa işlemeye devam edecektir alttaki örneğimizde görüldüğü gibi e.preventDefault() satırından sonra ki kod satırlarına geçer
    getData();

    // mantıken buraya yazılmalı, butona da yazarsak  api yi 2 kere çağırmış oluyor. console da burası açıkken bak
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {mealTypes.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
