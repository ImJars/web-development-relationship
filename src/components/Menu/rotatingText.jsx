import React from "react";
import ReactRotatingText from "react-rotating-text";

function RotatingText() {
  return (
    <>
      <div className="font-poppins font-medium text-color_wine_light text-sm sm:text-xl mt-4 text-center mx-2 sm:w-home-text">
        <ReactRotatingText
          items={[
            "Nuestra historia es un viaje lleno de risas, aventuras y recuerdos inolvidables. 📖❤️",
            "En cada risa y en cada abrazo, encontramos la esencia de lo que significa amarnos. 👫❤️",
            "Un pedacito de nosotros: lo que amamos, lo que hacemos y lo que nos inspira. 💕👫",
            "Cada día es una nueva página en nuestra historia, y estamos emocionados por lo que está por venir. 💖",
            "Nuestra aventura es una mezcla de complicidad y apoyo incondicional, donde cada día es especial. 👫❤",
            "Cada paso que damos juntos nos acerca más a nuestras metas y a la felicidad que construimos juntos. 👫❤️",
            "Nuestra relación es un viaje donde cada día aprendemos algo nuevo el uno del otro. 📖❤️",
            "Juntos enfrentamos desafíos y celebramos triunfos, construyendo un amor más fuerte cada día. 👫❤️",
            "Exploramos el mundo de la mano, creando recuerdos que atesoraremos para siempre. 💖👫",
            "Cada aventura juntos nos acerca más a la mejor versión de nosotros mismos. 💕👫",
          ]}
          typingInterval={35}
          deletingInterval={35}
        />
      </div>
    </>
  );
}

export default RotatingText;
