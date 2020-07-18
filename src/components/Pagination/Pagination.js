import React from "react";

const Paginate = ({ usersPerPage, totalUsers, currentPage }) => {
  const pages = [];

  const pageNumbers = Math.ceil(totalUsers / usersPerPage);

  for (let i = 1; i < pageNumbers; i++) {
    pages.push(i);
  }
  return (
    <nav style={{ marginLeft: "10px" }}>
      <ul className="pagination pagination-first">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a
              onClick={() => currentPage(page)}
              href="/#"
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
