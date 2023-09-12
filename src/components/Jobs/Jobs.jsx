import { Link } from "react-router-dom";
import "../Jobs/Jobs.css";
import edu from "../../Utilities/edu";
import jobs from "../../Utilities/jobsInfo";
import volunteering from "../../Utilities/volunteeringInfo";

function Jobs() {
  return (
    <div>
      <aside className="education">
        <h2>Education</h2>
        <div className=" edu-cards cards">
          {edu.map((stage) => (
            <section key={stage.id} id={stage.id} className="edu">
              <h4>{stage.date}</h4>
              <h4>{stage.institution}</h4>
              <h5 className="role">{stage.subject}</h5>
              {stage.details ? (
                <ul className="duties">
                  {stage.details.map((eachDetail, index) => {
                    return <li key={index}>{eachDetail}</li>;
                  })}
                </ul>
              ) : (
                <></>
              )}
              {/* <ul className="duties">
                {stage.details.map((eachDetail, index) => {
                  return <li key={index}>{eachDetail}</li>;
                })}
              </ul> */}
            </section>
          ))}
        </div>
      </aside>
      <aside className="employment">
        <h2>Employment</h2>
        <div className="employ-cards cards">
          {jobs.map((job) => (
            <section key={job.id} id={job.id} className="employ">
              <aside className="date-company">
                <h4>{job.date}</h4>
                <span> - </span>
                <h4>{job.company}</h4>
              </aside>
              <h5 className="role">{job.role}</h5>
              <ul className="duties">
                {job.duties.map((eachDuty, index) => (
                  <li key={index}>{eachDuty}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </aside>

      <aside className="volunteering">
        <h2>Volunteering</h2>
        <div className="volunteer-cards cards">
          {volunteering.map((eachRole) => (
            <section key={eachRole.id} id={eachRole.id} className="volunteer">
              <h4>{eachRole.date}</h4>
              <h4>{eachRole.company}</h4>
              <h5 className="role">{eachRole.role}</h5>
            </section>
          ))}
        </div>
      </aside>
      <Link to="/" className="list-item back">
        Back
      </Link>
    </div>
  );
}

export default Jobs;
