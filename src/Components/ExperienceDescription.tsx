import React from "react";
import { COLORS, FONTS } from "../GLOBAL";
import irespitevideo from "../Assets/irespiteVideo.mp4";
import robotVideo from "../Assets/robot.mp4";

interface ExperienceDescriptionProps {
  name: string;
}
const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
  name,
}) => {
  const description = {
    swiftconnect: (
      <>
        <li>
          Web Front-end development across three distinct projects using
          TypeScript (TS) and React.
        </li>
        <li>
          Proficient in debugging, addressing issues, and ensuring optimal code
          performance.
        </li>
        <li>
          Hands-on experience in feature implementation, introducing new
          functionalities to enhance user experience.
        </li>
        <li>
          Strategic refactoring of existing code for improved maintainability
          and scalability.
        </li>
        <li>
          Seamless integration of back-end to front-end using Node SDK, React
          SDK, and Axios calls.
        </li>
        <li>
          Expertise in facilitating communication and data exchange between
          server and user interface.
        </li>
      </>
    ),
    ubisoft: (
      <>
        <li>
          Creating interactive user interfaces for web applications using React.
        </li>
        <li>
          Implementing responsive design to ensure compatibility across various
          devices.
        </li>
        <li>
          Establishing seamless communication between the backend and frontend
          of applications.
        </li>
        <li>
          Utilizing Redux for state management to enhance the efficiency of data
          flow.
        </li>
        <li>
          Crafting visually appealing and user-friendly interfaces using design
          tools like Miro and Figma.
        </li>
        <li>
          Collaborating with design teams to translate concepts into engaging
          user experiences.
        </li>
        <li>
          Conducting thorough testing of APIs to ensure reliability and
          functionality.
        </li>
        <li>
          Writing test scripts and automating API testing processes for
          efficiency.
        </li>
        <li>
          Developing server-side logic and applications using the Go programming
          language.
        </li>
        <li>
          Implementing robust and scalable backend solutions to support the
          overall system architecture.
        </li>
      </>
    ),
    giro: (
      <>
        <li>
          Proficient in creating complex queries to extract and analyze data in
          Power BI.
        </li>
        <li>
          Skilled in designing interactive and insightful dashboards for
          effective data visualization.
        </li>
        <li>
          Experience in seamlessly integrating databases using SQL (Structured
          Query Language).
        </li>
        <li>
          Capable of optimizing database performance and ensuring efficient data
          retrieval.
        </li>
        <li>
          Proficient in writing and modifying scripts using VBS to automate
          tasks and enhance functionality.
        </li>
        <li>
          Skilled in troubleshooting and debugging VBS scripts to ensure smooth
          execution.
        </li>
      </>
    ),
    emsb: (
      <>
        <li>
          Tailored teaching methods to meet the unique needs of each student,
          ensuring a supportive and enriching educational experience.
        </li>
        <li>
          Conducted tutoring sessions in subjects including Math, Science,
          History, French, and English.
        </li>
        <li>Worked with children requiring special needs support.</li>
        <li>
          Provided special attention care to address individual learning
          requirements.
        </li>
      </>
    ),
    irespite: (
      <>
        <li>
          A smartphone app for coordinating trusted and flexible respite care
          services to families coping with palliative-stage cancer.
          <a
            href="https://aimeecastro.com/irespite-services-irepit/"
            target="_blank"
          >
            Read More
          </a>
        </li>
        <li>
          Took over the development of this app for 1 year as a capstone project
          in a group of 3
        </li>

        <li>
          iRespite design files:
          <a
            href="https://www.figma.com/file/tjrKgk05n7Dp2cIUQNsMOE/2023.10---iRespite?type=design&node-id=894-1073&mode=design"
            target="_blank"
          >
            Figma files
          </a>
        </li>
        <li>
          Vieo of the app running, showcasing the frontend and backend
          <iframe
            width="100%"
            height="auto"
            src={irespitevideo}
            title="iRespite Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
        <li>
          {" "}
          Technologies used in this application:
          <a
            href="https://www.figma.com/file/c17GEcjfYkbioaJZ8uaHNQ/Untitled-iRespite-tech-stack?type=whiteboard&node-id=0%3A1&t=ahWkZbC9OdB41A0i-1"
            target="_blank"
          >
            TechStack
          </a>
        </li>
        <div style={{ color: "#ff0000" }}>
          All rights belong to the iRespite team
        </div>
      </>
    ),
    portfolio: (
      <>
        <li>A personal project showcasing design and frontend skills </li>
        <li>
          Use of technolgies: Typescript, React, Framer-motion library, github
          papers
        </li>
        <li>
          Figma Design file:
          <a
            href="https://www.figma.com/file/rDtdqTaOCRtUir9WVcUTeA/Saghar's-team-library?type=design&mode=design&t=ahWkZbC9OdB41A0i-1"
            target="_blank"
          >
            Figma file
          </a>
        </li>
        <li>
          Source code:
          <a
            href="https://github.com/saqar-s/sagharsahebi.github.io"
            target="_blank"
          >
            Github
          </a>
        </li>
      </>
    ),
    dashcam: (
      <>
        <li>
          A python program analyzing two dashcam videos to count the number of
          moving cars, the number of parked cars and the number of pedestrians
        </li>
        <li>
          Use of object detection and object tracking technologies like Yolo and
          deepsort
        </li>
        <li>
          Source code:
          <a
            href="https://github.com/saqar-s/ECSE415-FinalProject/tree/main"
            target="_blank"
          >
            Github
          </a>
        </li>
      </>
    ),
    server: (
      <>
        <li>
          Implementation of a basic server and client using sockets in Python
        </li>
        <li>
          It creates a connection socket by client and server receives the HTTP
          request and parses it
        </li>
        <li>
          Source code:
          <a href="https://github.com/saqar-s/ECSE416-WebServer">Github</a>
        </li>
      </>
    ),
    database: (
      <>
        <li>
          A simple java program using the command line and SQL commands.The
          program is a continuation of the class's previous assignments where a
          simple database was designed. The java programs uses those data in the
          database and uses the SQL commands to get the information the user
          wants
        </li>
        <li>
          The user selects the menu option based on what they would like to do,
          the program performs some action(s) and goes back to displaying a
          menu.
        </li>
        <li>
          Source code:
          <a href="https://github.com/saqar-s/COMP421-P3">Github</a>
        </li>
      </>
    ),
    robot: (
      <>
        <li>
          Creating an artistic robot by using python programming, a rasberryPi,
          lego pieces and the command line in a group of 6
        </li>
        <li>
          The Program will take a user's input, which will indicate the image
          they would like to create – and the robot will use it to produce a
          mosaic of the image using a set of foam cubes.
        </li>
        <li>The input image is provided as an array of 1s and 0s</li>
        <li>
          A video of the final result of the robot making a mosaic art(double
          click on the video to see in full screen)
          <iframe
            src={robotVideo}
            title="robot Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
      </>
    ),
    codejam: (
      <>
        <li>
          Codejam is Mcgill's biggest engineering hackathon run by the
          undergraduate student society.
        </li>
        <li>Organized the event and lead the sub-teams</li>
        <li>
          Led as the logistics coordinator and managed budgeting and logistical
          coordination
        </li>
        <li>Sponsorship reachout and FAQ sessions with potential sponsors</li>
      </>
    ),
    swam: (
      <>
        <li>
          S.W.A.M. Canada is the parent organization behind a nation-wide
          network of not-for-profit, university student-run organizations
          providing barrier-free, one-on-one, water-safety and swimming
          instruction to children with disabilities.
        </li>
        <li>
          S.W.A.M instructor for two years and worked with children with special
          needs such as down syndrome, Autism and high ADHD
        </li>
        <li>
          Guided and supervised as the lead instructor, overseeing the session,
          managing the schedules of volunteer instructors, and providing
          assistance in challenging scenarios when volunteers faced difficulties
          handling situations with the children.
        </li>
      </>
    ),
    mcgill: (
      <>
        <li>
          Assisted newly enrolled students in exploring McGill, familiarizing
          them with available resources, and providing support with course
          selection.
        </li>
        <li>
          Support students throughout their first university event, orientation
          week.
        </li>
      </>
    ),
  };

  const selectedCompany = description[name as keyof typeof description];

  return (
    <div style={styles.text}>
      <ul style={styles.bulletList}>{selectedCompany}</ul>
    </div>
  );
};

const styles = {
  text: {
    color: COLORS.Black,
    fontSize: "1.2vw",
    fontFamily: FONTS.JetBrains,
    fontWeight: "2vw",
  },
  bulletList: {
    listStyleType: "disc",

    lineHeight: 1.5,
  },
};

export default ExperienceDescription;
