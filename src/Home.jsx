import Picture from './assets/Picture.png'
import google from './assets/google.png'
import linkedin from './assets/linkedin.png'
import git from './assets/git.png'


function Home() {
    return (
        <>
            <div className="textContainer">
                <img src={Picture} alt="keila" height="400px" width="400px"></img>
                <h1 className="name1">Keila Santiago</h1>
                <p className="bionote">
                    Passionate student aspiring to be a Project Manager with a relentless commitment to excellence. Currently pursuing a Bachelor of Science in Information Technology at the University of Santo Tomas. Actively seeking opportunities to integrate and elevate skills in Project Management, Product Management, UI/UX, and Quality Analysis. A proactive and dedicated professional, bringing a fervent enthusiasm for efficiently managing projects, refining user experiences, and upholding unparalleled product quality standards. Committed to continual growth and innovation in technology.
                </p>

                <div className="socialMedia">
                    <a href="mailto:keila.santiago.cics@ust.edu.ph" target="_blank" rel="noopener noreferrer">
                        <img className="google" src={google} alt="google" height="30px" width="30px" />
                    </a>
                    <a href="https://www.linkedin.com/in/keila-santiago-15aab9238/" target="_blank" rel="noopener noreferrer">
                        <img className="linkedin" src={linkedin} alt="linkedin" height="30px" width="30px" />
                    </a>
                    <a href="https://github.com/klsntg" target="_blank" rel="noopener noreferrer">
                        <img className="git" src={git} alt="git" height="30px" width="30px" />
                    </a>
                </div>


                {/* Add contact details here: email, LinkedIn, number, Facebook */}
            </div>

            <div className="cvContainer">

                <div className="professionalExperience">
                    <h1 className="cvCategory">Professional Experience</h1>
                    <hr />
                    <h2><b>Project Manager </b>- Software Engineering I & II (Aug 2023 - Present)</h2>
                    <ul>
                        <li>Leads a team of 7 members throughout the project management and execution, ensuring comprehensive oversight throughout the project life cycle</li>
                        <li>Regularly communicates with clients, acting as the primary representative for the project team</li>
                    </ul>

                    <h2><b>Product Management Intern</b> - Kada Kareer (Aug 2023 - Nov 2023)</h2>
                    <ul>
                        <li>Conducts thorough competitor and market research, contributing to the enhancement of project quality and informed decision-making for <br></br>KadaKareer's products</li>
                        <li>Executes product initiatives in line with the product roadmap, emphasizing alignment with KadaKareer's mission and goals</li>
                    </ul>
                </div>

                <div className="co-CurricularExperience">
                    <h1 className="cvCategory2">Co-Curricular Experience</h1>
                    <hr />
                    <h2><b>Executive Coordinator to the Corporate Secretary</b> - SOCC (Oct 2023 - Present)</h2>
                    <ul>
                        <li>Streamlines and executes administrative duties, enhancing the council's productivity by 40%</li>
                        <li>Elevates the quality of 70% of the council's projects, benefiting the entire Thomasian community</li>
                    </ul>

                    <h2><b>Director for Project Management</b> - ICS Student Council (July 2023 - Present)</h2>
                    <ul>
                        <li>Manages a team of 5 members that handles the paperwork and requirements for all official events, projects, and activities of the council</li>
                        <li>Assists in 70% of the projects and events for the 1100 Information Computing Sciences Students</li>
                    </ul>

                    <h2><b>Executive Secretary</b> - Society of Information Technology Enthusiasts (May 2022 - Present)</h2>
                    <ul>
                        <li>Spearheads 80% of projects and events for the entire year that cater to numerous opportunities for the 418 Information Technology Students to <br></br>grow and learn outside the classroom</li>
                        <li>Manages a team of 7 members that handles the paperwork and administrative side of the organization</li>
                    </ul>
                </div>

                <div className="education">
                    <h1 className="cvCategory3">Education</h1>
                    <hr />
                    <h2><b>Bachelor of Science in Information Technology </b> - University of Santo Tomas (2021 - Present)</h2>
                    <h3>Web Development Track</h3>
                    <ul>
                        <li>Involved in several organizations with positions (SITE, TGS, CNAG, SOCC, ICS Student Council, MUSIKAT, & TMN)</li>
                        <li>Class President (A.Y. 2021-2022) and Dean’s Lister (A.Y. 2021-2023)</li>
                        <li>Scholar at the Collaborative Online International Learning (COIL) for Web Development </li>
                    </ul>

                    <h2><b>Senior High School</b> - International Philippine School in Jeddah (2019-2021)</h2>
                    <h3>Science, Technology, Engineering, and Mathematics Strand</h3>
                    <ul>
                        <li>Graduated with High Honors, received Best in Research and Best Female Presenter for Research</li>
                        <li>Activities and societies: Grade 11 Business Manager, Grade 12 Class Secretary, Vice President for Picturesque </li>
                    </ul>
                </div>

                <div className="skills">
                    <h1 className="cvCategory4">Skills</h1>
                    <hr />
                    <ul>
                        <li><b>Technical Skills:</b> Project Management (Trello), Programming Languages (Java, Kotlin, SQL, PHP), Front-End (HTML, CSS, React.JS, Bootstrap),<br></br> Visual Design (Figma), User Research, and Wireframing</li>
                        <li><b>Soft Skills:</b> Communication, Leadership, Team Collaboration, Problem-Solving, Stakeholder Management, Task Delegation, Time Management, <br></br>Detail-oriented, and Adaptability </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
