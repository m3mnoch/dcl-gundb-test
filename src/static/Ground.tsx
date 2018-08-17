import { createElement } from "metaverse-api";

const Ground = (props: JSX.BaseEntity) => {
  return <box id="ground" position={{ x: 5, y: 0, z: 5 }} scale={{ x: 9.9, y: 0.001, z: 9.9 }} color="#228B22" />;
};

export default Ground;
