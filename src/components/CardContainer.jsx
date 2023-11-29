import React from "react";
import AvatarImg from "./CardContainer/AvatarImg";
import Title from "./CardContainer/Title";

function CardContainer() {
  return (
    <section className="card-container">
      <article className="profile-card">
        <AvatarImg />
        <Title />
      </article>
    </section>
  );
}

export default CardContainer;
