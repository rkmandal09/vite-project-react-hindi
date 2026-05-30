import React from "react";
import Card from "./components/Card";

const jobOpenings = [
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://tse2.mm.bing.net/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://tse1.mm.bing.net/th/id/OIP.E_6bkhToHu7bDu8u_ldacQHaHa?pid=Api&P=0&h=180",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://tse4.mm.bing.net/th/id/OIP.KzOFPzLnbMPTb4zlzxi8PgHaHa?pid=Api&P=0&h=180",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Pune, India",
  },
  {
    brandLogo:
      "https://tse2.mm.bing.net/th/id/OIP.AC0iUF7KyK0iqL7HZ2JzcQHaD5?pid=Api&P=0&h=180",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Delhi, India",
  },
  {
    brandLogo:
      "https://tse4.mm.bing.net/th/id/OIP.86dx40SntiY21y4M5OQKzgHaHa?pid=Api&P=0&h=180",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Noida, India",
  },
  {
    brandLogo:
      "https://tse3.mm.bing.net/th/id/OIP.DCDDJkvIIvcHy7DIf45EZwHaEy?pid=Api&P=0&h=180",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "JavaScript Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Chennai, India",
  },
  {
    brandLogo:
      "https://tse3.mm.bing.net/th/id/OIP.uH4dGMRTIYF2UxGFv67TAgHaHa?pid=Api&P=0&h=180",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo:
      "https://tse4.mm.bing.net/th/id/OIP.P_z8uTsVJ8tmPn2prJwOpQHaHa?pid=Api&P=0&h=180",
    companyName: "LinkedIn",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://tse3.mm.bing.net/th/id/OIP.Q99Pb4JZ7yvF85tIvo5vtAHaHa?pid=Api&P=0&h=180",
    companyName: "X (Twitter)",
    datePosted: "10 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Bangalore, India",
  },
];

const App = () => {
  return (
    <div className="App">
      {jobOpenings.map((elam, idx) => {
        return (
          <div key= {idx}>
            <Card
            brandLogo={elam.brandLogo}
            companyName={elam.companyName}
            datePosted={elam.datePosted}
            post={elam.post}
            tag1={elam.tag1}
            tag2={elam.tag2}
            pay={elam.pay}
            location={elam.location}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;
