import React from "react";
import ReactRotatingText from "react-rotating-text";

function RotatingText() {
  return (
    <>
      <div className="font-poppins font-medium text-textColor_Purple text-sm sm:text-xl mt-4">
        <ReactRotatingText
          items={[
            "Nuestra Historia de Amor 📖❤️",
            "5 Años Juntos 💕👫",
            "El Amor de mi Vida 💖",
            "El mejor equipo del mundo 👫❤",
            "Siempre Juntos en las buenas y en las malas 👫❤️",
          ]}
        />
      </div>
    </>
  );
}

export default RotatingText;
