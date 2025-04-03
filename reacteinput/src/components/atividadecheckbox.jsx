import { useState } from "react";

function InputCheck() {
  const [hobbies, setHobbies] = useState(() => {
    const storedHobbies = localStorage.getItem('hobbies');
    return storedHobbies? JSON.parse(storedHobbies) : [];})

  const toggleHobby = (hobby) => {
    setHobbies((prev) =>
        prev.includes(hobby)
         ? prev.filter((item) => item !== hobby)
          : [...prev, hobby]
      );
    }
    localStorage.setItem("hobbies", hobbies.toString());
  return (
    <div>
       
      <h3>Selecione seus hobbies:</h3>
      {["esportes", "musica" , "cinema"].map((hobby) => (
       <label key={hobby}>
        <input type="checkbox"
        value={hobby}
        checked={hobbies.includes(hobby)}
        onChange={() => toggleHobby(hobby)}
        />
        {hobby}
       </label>
      ))}
    </div>
  );
}
export default InputCheck;