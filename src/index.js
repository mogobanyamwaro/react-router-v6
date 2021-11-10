import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="course" element={<Courses />}>
          <Route path=":courseid" element={<CouserId />} />
        </Route>
        <Route path="bundle" element={<Bundle />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

function Home() {
  return <h1>Home route</h1>;
}
function Learn() {
  return (
    <>
      <h1>Learn route</h1>
      <Link to="/learn/course" style={{ color: '#fff' }}>
        courses
      </Link>{' '}
      |
      <Link to="/learn/bundle" style={{ color: '#fff' }}>
        bundle
      </Link>
      <Outlet />
    </>
  );
}
function Courses() {
  const courseList = ['React', 'Angular', 'Vue', 'Node js'];
  const randomCourse =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <>
      <h1>coursses list route</h1>
      <p>More test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'blue' : 'red',
          };
        }}
        to={`/learn/course/${randomCourse}`}
      >
        {randomCourse}
      </NavLink>
      ||
      <NavLink to={`/learn/course/tests`}>tests</NavLink>
      <Outlet />
    </>
  );
}
function Bundle() {
  return <h1>Bundles list is here route</h1>;
}
function CouserId() {
  const { courseid } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>params is :{courseid}</h1>
      <button onClick={() => navigate('/dashboard', { state: '399 ' })}>
        price
      </button>
      <Link to="/dashboard" state={'Djang js'}>
        Test link
      </Link>
    </>
  );
}
function Dashboard() {
  const location = useLocation();
  return <h1>infor that i brought herre is {location.state} </h1>;
}
reportWebVitals();
