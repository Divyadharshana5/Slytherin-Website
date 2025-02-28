import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Alice",
    github: "https://github.com/alice",
    linkedin: "https://linkedin.com/in/alice",
    email: "alice@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Bob",
    github: "https://github.com/bob",
    linkedin: "https://linkedin.com/in/bob",
    email: "bob@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Charlie",
    github: "https://github.com/charlie",
    linkedin: "https://linkedin.com/in/charlie",
    email: "charlie@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "David",
    github: "https://github.com/david",
    linkedin: "https://linkedin.com/in/david",
    email: "david@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Emma",
    github: "https://github.com/emma",
    linkedin: "https://linkedin.com/in/emma",
    email: "emma@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Frank",
    github: "https://github.com/frank",
    linkedin: "https://linkedin.com/in/frank",
    email: "frank@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Grace",
    github: "https://github.com/grace",
    linkedin: "https://linkedin.com/in/grace",
    email: "grace@example.com",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Hank",
    github: "https://github.com/hank",
    linkedin: "https://linkedin.com/in/hank",
    email: "hank@example.com",
    image: "https://via.placeholder.com/150",
  },
];

const TeamGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      {teamMembers.map((member) => (
        <Link
          to={`/team/${member.id}`}
          key={member.id}
          className="bg-blue-500 p-6 rounded-lg text-white text-center hover:bg-blue-700"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-20 h-20 mx-auto rounded-full mb-2"
          />
          <p className="text-lg font-bold">{member.name}</p>
        </Link>
      ))}
    </div>
  );
};

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === parseInt(id));

  if (!member)
    return <p className="text-center text-red-500">Member not found!</p>;

  return (
    <div className="flex flex-col items-center p-10">
      <img
        src={member.image}
        alt={member.name}
        className="w-40 h-40 rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold">{member.name}</h1>
      <p>
        <a href={member.github} className="text-blue-500" target="_blank">
          GitHub
        </a>
      </p>
      <p>
        <a href={member.linkedin} className="text-blue-500" target="_blank">
          LinkedIn
        </a>
      </p>
      <p>
        <a href={`mailto:${member.email}`} className="text-blue-500">
          Email
        </a>
      </p>
      <Link
        to="/"
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Back
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamGrid />} />
        <Route path="/team/:id" element={<TeamMemberDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
