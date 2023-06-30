import "../Jobs/Jobs.css";

function Jobs() {
  const jobs = [
    {
      id: "one",
      date: "11/2019 to 12/2021",
      company: "CHL Mortgages",
      role: "Arrears Operations Specialist",
      duties: [
        "Contacting customers by telephone regarding arrears on mortgage accounts and dealing with any queries",
        "Taking payments for accounts that are in arrears and analysis of finances to work out repayment plans.",
      ],
    },
    {
      id: "two",
      date: "02/2018 to 10/2019",
      company: "Metro Bank",
      role: "Customer Service Representative",
      duties: [
        "Onboarding new personal and business customers providing lending facilities and dealing with queries, customer service duties and ATM balancing.",
      ],
    },
    {
      id: "three",
      date: "10/2017 to 02/2018 ",
      company: "Metro Bank",
      role: "Lead Cashier",
      duties: [
        "Supporting the cashiers in their tasks by performing observations, coaching sessions and till checks to improve service as well as handling cash orders and transfers for branch.",
      ],
    },
    {
      id: "four",
      date: "10/2016 to 10/2017 ",
      company: "Metro Bank",
      role: "Cashier",
      duties: [
        "Customer service queries, cash handling and training on new cashier staff",
      ],
    },
    {
      id: "five",
      date: "11/2015 to 10/2016",
      company: "River Island",
      role: "Retail sales assistant",
      duties: [
        "Dealing with customer queries and handling financial transactions.",
      ],
    },
  ];

  const volunteering = [
    {
      id: "one",
      date: "06/2015 to 07/2015",
      company: "Winterbourne Junior Girls' School ",
      role: "Teaching Assistant",
    },

    {
      id: "two",
      date: "01/2015 to 02/2015",
      company: "HM Revenue and Customs, Security and Information Directorate",
      role: "Business Management Team trainee",
    },

    {
      id: "three",
      date: "11/2014 to 12/2014",
      company: "Department for Work and Pensions",
      role: "Business Support Team trainee",
    },

    {
      id: "four",
      date: "01/2014 to 03/2014",
      company: "Pioneer Advertising/ Miami Marketing",
      role: "Sales Representative",
    },

    {
      id: "five",
      date: "07/2012 to 08/2012",
      company: "Ghana Standards Authority",
      role: "Forensic, Drugs & Cosmetics Laboratory Assistant",
    },
  ];

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
              <ul>
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
