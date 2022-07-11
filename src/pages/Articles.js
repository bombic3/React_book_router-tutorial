import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      {/* Outlet 컴포넌트가 사용된 자리에 중첩된 라우트가 보여지게 됨 */}
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글1
          </NavLink>
          {/* <Link to="/articles/1">게시글 1</Link> */}
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글2
          </NavLink>
          {/* <Link to="/articles/2">게시글 2</Link> */}
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글3
          </NavLink>
          {/* <Link to="/articles/3">게시글 3</Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Articles;