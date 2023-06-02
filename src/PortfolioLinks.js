import React from "react";

const PortfolioLinkCards = ({ data }) => {
  return (
    <div className="flex">
      <a href={data.link} target="_blank">
        <img
          alt={data.name}
          src={data.imgLink}
          className="w-10 h-10 hover:scale-110 px-1 mx-5 rounded-2xl"
        />
      </a>
    </div>
  );
};

const PortfolioLinks = () => {
  const portfolioLinkData = [
    {
      imgLink:
        "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw",
      link: "https://www.linkedin.com/in/mukund-madhav-67a95726b/",
      name: "Linked In",
    },
    {
      imgLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJ3QTjFi5S8Ipj2e-vtxPRSfu8bB7dVlX6rNRaswKCDSSHS64vQEy_HcWsXphiR6B2Fo&usqp=CAU",
      link: "",
      name: "Naukari",
    },
    {
      imgLink:
        "https://scontent.fpat2-4.fna.fbcdn.net/v/t39.30808-6/305317853_616467910000160_3824851731065368025_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_aid=0&_nc_ohc=gpgDWaNpec4AX9Sz6MK&_nc_ht=scontent.fpat2-4.fna&oh=00_AfCWXvUPldk09n9hiNvVdUs_tzuMee8jBy_3BVQn4V3wjQ&oe=647FCA5B",
      link: "https://leetcode.com/mukundmadhav773/",
      name: "LeetCode",
    },

    {
      imgLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/225px-Logo_of_Twitter.svg.png",
      link: "https://twitter.com/mukundm44228960",
      name: "Twitter",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl mx-5">Connect With Me</h2>
      <div className="flex mt-5">
        {portfolioLinkData.map((curelem) => {
          return <PortfolioLinkCards data={curelem} key={curelem.name} />;
        })}
      </div>
    </div>
  );
};

export default PortfolioLinks;
