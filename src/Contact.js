import React, { useState } from "react";
import { useSelector } from "react-redux";
const Section = ({ title, content, isVisible, setIsVisible }) => {
  const [show, setShow] = useState(true);
  const isDark = useSelector((store) => store.darkMode.isDark);
  console.log(isDark);
  return (
    <>
      {show === true ? (
        <>
          <div className="border border-black m-2">
            <h2 className={"font-bold mb-2" + (isDark && "text-red-900")}>
              {title}
            </h2>
            <h2>{content}</h2>
            <button onClick={() => setShow(false)}>Hide</button>
          </div>
        </>
      ) : (
        <>
          <div className="border border-black m-2">
            <h2 className="font-bold mb-2">{title}</h2>
            <button onClick={() => setShow(true)}>Show</button>
          </div>
        </>
      )}
    </>
  );
};
const Content =
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur molestiae placeat obcaecati pariatur soluta, corporis similique architecto, perferendis optio iste, deserunt quisrepellendus incidunt velit eligendi nulla sint error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet inventore labore ducimus placeat maiores tempora dicta id qui accusantium nemo nesciuntearum neque, nisi, odit necessitatibus dolore minima doloremque tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad expedita quae aliquid! Labore provident eligendi consequatur consequuntur ex, quos delectus laborum earum dignissimos, tenetur quiaperiam ad id minima magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sapiente accusamus magnam. Voluptate rem";

const Contact = () => {
  return (
    <div>
      <Section title="My Name" content={Content} />

      <Section title=" Intro" content={Content} />
      <Section title="About" content={Content} />
      <Section title="Relationship" content={Content} />
    </div>
  );
};

export default Contact;
