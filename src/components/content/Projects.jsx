import "./Projects.css";
import Cardprojects from "../cardprojects/Cardprojects";

export default function Projects() {
  return (
    <>
      <h2 className="section__title"> Projects</h2>
      <p className="section__para">
        Her er et overblik over mine tidligere projekter
      </p>
      <div className="projects__container-flex">
        <Cardprojects img="./webDoc.png" description="En webdokumentar til kunstneren Mark Ebert" link=""/>
        <Cardprojects img="./keramik.png" description="Et websted til et lokalt keramikværksted"/>
      </div>
    </>
  );
}
