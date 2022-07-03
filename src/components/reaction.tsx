import React from "react";
import { IReaction } from "../interfaces/IReaction";

interface Props {
  name: string
  description: string;
}
const Reaction = ({ name, description }: Props) => {
  return (
    <div className=".carousel-inner">
      <span>{name}</span>
      <span>{description}</span>
    </div>
  );
};

export default Reaction;
