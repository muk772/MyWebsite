import React from "react";

const ProjectCard = ({ info }) => {
  return (
    <div className="flex">
      <div className="shadow-lg bg-slate-200 mx-3 mt-3 rounded-lg w-1/4">
        <img
          className="w-full  p-5 rounded-lg"
          alt="project image"
          src={info.projectImg}
        />
        <ul>
          <li className="font-bold m-2">{info.projectName}</li>
          <li className="m-2">{info.projectDesc}</li>
        </ul>
      </div>
      <div className="mt-5 w-3/4">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          consequuntur molestiae placeat obcaecati pariatur soluta, corporis
          similique architecto, perferendis optio iste, deserunt quis
          repellendus incidunt velit eligendi nulla sint error? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eveniet inventore labore
          ducimus placeat maiores tempora dicta id qui accusantium nemo nesciunt
          earum neque, nisi, odit necessitatibus dolore minima doloremque
          tenetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
          expedita quae aliquid! Labore provident eligendi consequatur
          consequuntur ex, quos delectus laborum earum dignissimos, tenetur qui
          aperiam ad id minima magnam. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quas sapiente accusamus magnam. Voluptate rem
          similique vero nulla natus, quod incidunt beatae architecto atque
          repudiandae fuga alias eveniet deleniti aut voluptas. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sapiente unde
          consequuntur hic totam doloribus aut nam vel accusantium ab vitae
          architecto minus eligendi non autem provident magni libero, fugiat
          vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Pariatur autem eaque aperiam. Consequuntur, laudantium eos dolorum
          expedita voluptatem labore magni beatae. Odit quae reprehenderit omnis
          ipsum earum voluptates, veniam quod?
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
