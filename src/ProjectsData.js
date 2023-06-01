const youTubeDesc = (
  <>
    The YouTube clone application I built is a remarkable example of modern
    web development using<b> React, Redux Toolkit, and Tailwind</b>. With these
    technologies, I have successfully recreated the core functionalities of
    YouTube while incorporating additional optimizations and features. One
    notable feature of this application is the <b>optimized debouncing</b> for
    the search functionality. By implementing debouncing, I have reduced the
    number of API requests made during a user's search. This not only improves
    performance but also minimizes unnecessary server load. Users can experience
    a smoother and more efficient search process, with instant live search
    suggestions powered by the YouTube API. The usage of{" "}
    <b>higher-order components</b>
    (HOCs) on the Home page demonstrates code reuseability understandings and
    extensibility. By leveraging HOCs, I have added enhanced functionalities to
    multiple components, promoting clean and modular code. This approach
    simplifies maintenance and updates, as changes made to the HOCs
    automatically propagate to all components utilizing them. Nested components
    have been effectively employed throughout this application to keep the
    codebase organized and manageable. By breaking down complex user interfaces
    into smaller, reusable components, I have achieved a higher level of
    <b>maintainability</b>. This allows for easier debugging, testing, and
    future expansions. The use of nested components showcases your attention to
    code structure and best practices. Another noteworthy feature is the
    implementation of <b>live chat functionality</b> <b>through API polling</b>,
    coupled with <b>optimization techniques</b>. This enables real-time
    communication between users, enhancing the interactive experience of your
    YouTube clone. By regularly polling the server for new chat messages, users
    can see and respond to messages instantly. The optimization ensures an
    optimal balance between responsiveness and server load, providing a seamless
    and reliable live chat experience. Overall, this YouTube clone application
    showcases my proficiency in modern <b>front-end development techniques</b>.
    The utilization of React, Redux Toolkit, and Tailwind, along with the
    inclusion of optimized debouncing, higher-order components, nested
    components, and live chat functionality, demonstrates my ability to build
    robust and feature-rich web applications.
  </>
);

export const projectData = {
  projects: [
    {
      projectName: "You tube Clone",
      projectImg: "../Images/youtubeproject.png",
      projectLink: "https://github.com/muk772/youtube",
      projectDesc: youTubeDesc,
    },
    {
      projectName: "Swiggy clone",
      projectImg:
        "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/16165408/swiggy.jpeg",
      projectLink: "https://github.com/muk772/Swiggy-Clone-",
      projectDesc: "This app is driving the swiggy app",
    },
    {
      projectName: "Todo App using Redux",
      projectImg:
        "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/16165408/swiggy.jpeg",
      projectLink: "https://github.com/muk772/ToDo-App-using-redux-",
      projectDesc: "This app is driving the swiggy app",
    },

    {
      projectName: "My Personal website",
      projectImg:
        "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/16165408/swiggy.jpeg",
      projectLink: "https://github.com/muk772/MyWebsite",
      projectDesc: "This app is driving the swiggy app",
    },
  ],
};
