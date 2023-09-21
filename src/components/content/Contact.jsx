import Some from "./Some";

export default function Contact() {
  return (
    <>
      <h2 className="section__title margin-bottom babas">Contact</h2>
      <p className="section__para inter">
        Skriv til min på LinkedIn eller send mig en mail. <br /> <br /> Jeg ser
        frem til at høre fra dig!
      </p>
      <div className="flex">
        <Some />
        <p className="last-updated__para inter">Senest opdateret: september 2023</p>
      </div>
      
    </>
  );
}
