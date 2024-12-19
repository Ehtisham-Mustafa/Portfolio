import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import task_track from "../../Assets/Projects/task_track.png";
import blogImg from "../../Assets/Projects/blog.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import fabChart from "../../Assets/Projects/fab_lead_time_chart.png";
import fabPieChart from "../../Assets/Projects/fabPieChart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Glass Chat Bot"
              description="I developed a sophisticated chatbot designed to streamline the sales process for glass products.
               The chatbot interacts with customers in real-time, guiding them through a series of questions to gather the required specifications for the glass they wish to purchase."
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fabChart}
              isBlog={false}
              title="Fabrication Line Chart"
              description="I developed a Line Chart for a client in the manufacturing sector who needed an efficient way to track the time taken 
              for the fabrication of various products. The goal was to visualize the fabrication progress over time, allowing the client to analyze
              production efficiency, identify bottlenecks, and optimize workflow. The chart provides real-time updates, visualizing the time spent on each stage of the fabrication process.
               Users can choose different time intervals (e.g., daily, weekly, monthly) to better understand production trends over different periods"
    
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fabPieChart}
              isBlog={false}
              title="Fabrication Pie Chart"
              description="I developed a Pie Chart for a client in the manufacturing industry to help track the time spent on each stage of the fabrication process for various products. 
              The goal was to provide a visual breakdown of time distribution across different fabrication stages, enabling the client to identify inefficiencies and optimize their production cycle.
               The pie chart visually represents the time allocation for each step in the fabrication process (e.g., cutting, assembly, finishing), making it easy to see which stages consume the most time."
    
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Igbo Translation Bot"
              description="I developed an Igbo Translation Bot for a client, aimed at providing seamless English-to-Igbo and Igbo-to-English translations.
               The bot utilizes advanced technology to deliver fast and accurate translations, offering a valuable tool for users needing language support between English and Igbo.
               The bot supports both English-to-Igbo and Igbo-to-English translations, enabling users to translate text in either direction based on their needs."
              ghLink="https://github.com/Ehtisham-Mustafa/Igbo-language-bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogImg}
              isBlog={false}
              title="Farmer App"
              description="The Farmer App is a comprehensive mobile and web-based application designed to provide farmers with essential information to help them make informed decisions.
               The app focuses on offering real-time weather updates, market prices, and various other resources, all aimed at enhancing productivity and profitability for farmers.
               Farmers can access valuable agricultural tips, news, and updates related to farming practices, pest control, crop management, and new technologies to stay informed."
              ghLink="https://github.com/Ehtisham-Mustafa/Node-Farm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quizz App"
              description="The Quiz App is an interactive and engaging platform designed to help users test and improve their knowledge across a wide range of topics. Whether you're preparing for an exam
               or just want to challenge yourself, this app provides a fun and effective way to assess your learning and cognitive abilities.
                The app offers quizzes across various categories, including general knowledge, science, history, technology, and more, allowing users to explore different topics and test their knowledge in multiple areas."
              ghLink="https://github.com/Ehtisham-Mustafa/Quizz-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shopping App"
              description="The Shopping App is an e-commerce platform built with React.js designed to provide users with a seamless and engaging shopping experience. It allows users to browse, search, and purchase products effortlessly, all within a user-friendly interface.
              Users can explore a wide range of products, with categories and filters to easily navigate through the items.The app includes a powerful search function that helps users quickly find products. Filters such as price range, category, and ratings allow users to narrow down their choices and find exactly what they need."
              ghLink="https://github.com/Ehtisham-Mustafa/amazona-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task_track}
              isBlog={false}
              title="Task Tracker App"
              description="A task tracking app built in React Js I developed a Task Tracker App using React.js to help users efficiently manage and track their tasks. 
              The app allows users to create, edit, and delete tasks, set deadlines, and prioritize their activities, all while maintaining an intuitive and user-friendly interface.
              Users can easily add new tasks with titles, descriptions, and deadlines. They can also edit or delete existing tasks, making it easy to stay on top of their workload."
              ghLink="https://github.com/Ehtisham-Mustafa/React-Task-Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
