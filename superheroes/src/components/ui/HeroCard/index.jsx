import React from "react";

const HeroCard = ({ hero }) => {
  const {
    name,
    universe,
    alterego,
    occupation,
    friends,
    superpowers,
    url,
    info,
  } = hero;
  const handleClick = () => {
    console.log(name);
  };
  const handleSendNumber = (num) => {
    console.log(num);
  };
  return (
    <div className="hero-card">
      <h1 onClick={handleClick}>{name}</h1>
      <h2 onClick={() => handleSendNumber(10)}>Вселенная: {universe}</h2>
      <h2>Альтерэго: {alterego}</h2>
      <h2>Род деятельности: {occupation}</h2>
      <h2>Друзья: {friends}</h2>
      <h2>Суперсила: {superpowers}</h2>
      <img src={url} alt={name} />
      <h2>Описание: {info}</h2>
    </div>
  );
};

export default HeroCard;
