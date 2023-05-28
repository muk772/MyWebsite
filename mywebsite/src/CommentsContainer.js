import React from "react";

const commentsData = [
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Mukund",
        comment:
          "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Mukund",
            comment:
              "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Mukund",
                comment:
                  "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div>
      <h2 className="text-3xl">{name}</h2>
      <h2>{comment}</h2>
    </div>
  );
};

const CommentList = ({ comments }) => {
  console.log(comments);
  return (
    <>
      {comments.map((curelem) => {
        return (
          <div className="">
            <div className="">
              <Comment data={curelem} />
            </div>
            <div className="ml-5 border border-b-gray-400 shadow-lg rounded-lg bg-gray-200">
              <CommentList comments={curelem.replies} />
            </div>
          </div>
        );
      })}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
