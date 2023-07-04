import "../Jobs/Jobs.css";
import jobs from "../../Utilities/jobsInfo";
import volunteering from "../../Utilities/volunteeringInfo";

function Jobs() {
  return (
    <div>
      <aside>
        <h1>Employment</h1>
        <div className="cards">
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
        <h1>Volunteering</h1>
        <div className="cards">
          {volunteering.map((eachRole) => (
            <section key={eachRole.id} id={eachRole.id} className="volunteer">
              <h4>{eachRole.date}</h4>
              <h4>{eachRole.company}</h4>
              <h5 className="role">{eachRole.role}</h5>
            </section>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Jobs;
