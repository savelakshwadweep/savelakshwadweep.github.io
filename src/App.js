import { useState } from "react";
import moment from "moment";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState(
    "Regarding the ongoing issues in Lakshadweep Islands"
  );
  const [content, setContent] = useState(
    `Sir,\nAs you might be already aware of, the current Administrator of Lakshadweep Islands, Shri. Praful Patel had introduced certain policies and reforms that denied the basic rights and freedom of the Lakshadweep Islanders since his appointment in Dec 2020. Most of the officers who were working in various posts were dismissed from the government services, the powers of the district panchayats were taken over by the administrator, alcohol which was totally banned till date was allowed in the name of tourism development, slaughter of cattle was prohibited, and moreover Goonda Act was implemented in the island which was totally unnecessary considering the peaceful life being lead by the islanders right now. He gave orders to demolish the fishermen's sheds built on the coastal areas. By the implementation of LDAR, the administrator either removed or relocated islanders from their own properties. The govt. is directly interfering with the islanders' right to possess and retain their own property through this. The govt. also banned all news portals to prevent anti-govt voices and protests. Thus, if you look into, a number of reforms that lead to damaging the economic-cultural uniqueness of Lakshadweep Islands were introduced by this administrator.\nIt shall be also noted that the govt. granted permission to corporate companies to encroach the island's land and coastal areas in the name of development of the tourism sector. This will result in erasing the geographical peculiarity of the islands. We would like to bring to your attention that the anti-Muslim attitude of the Sang Parivar is also a major cause for all these reforms. The administrator's attempt on a whole is to turn the Lakshadweep Islands into a laboratory for testing racialism. The islanders are all removed from administrative offices. In view of all these DYFI is coming up with a few suggestions for solving the issues faced by the Islanders.\n1. Democracy is to be retained\n2. Repeal anti-citizen laws which were implemented recently\n3. Recall the administrator who implemented all the anti-democratic policies\nOur Constitution aims at promoting economic, cultural and geographic diversities of each and every region. So, we humbly request you to consider the above suggestions for protecting the people of Lakshadweep from these anti-democratic laws and thus save this beautiful piece of land.\n${moment().format(
      "DD/MM/YYYY"
    )}                                                                              Yours faithfully,\n                                                                              -`
  );
  return (
    <div className="container">
      <h2>Send Mail For Lakswadweep</h2>
      <div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Subject:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            name="subject"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Content:</label>
          <textarea
            type="email"
            className="form-control textarea"
            placeholder="Enter Subject"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="subject"
          />
        </div>
        <a
          href={encodeURI(
            `mailto:presidentofindia@rb.nic.in?subject=${subject}&body=${content}${name}`
          )}
          className="btn btn-primary container-fluid"
        >
          Send Mail
        </a>
      </div>
    </div>
  );
}

export default App;
