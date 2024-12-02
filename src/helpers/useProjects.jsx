import { useEffect, useState } from "react";

function useProjects() {
  const [pageSize, setPageSize] = useState(5);
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const [maxPages, setMaxPages] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json")
      .then(data => data.json())
      .then(projectsData => {
        if (projectsData?.length) {
          setProjects(projectsData);
          projectsData?.length >= pageSize && setPageData(projectsData.slice(0, pageSize));
          setMaxPages(Math.ceil(projectsData?.length / pageSize));
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const newPageData = projects.slice((page - 1) * pageSize, page * pageSize);
    setMaxPages(Math.ceil(projects?.length / pageSize));
    setPageData(newPageData);
  }, [page, pageSize]);

  useEffect(() => {
    setPage(1);
  }, [pageSize])

  return {
    projects,
    pageData,
    setPageData,
    page,
    setPage,
    pageSize,
    setPageSize,
    maxPages
  }
}

export default useProjects;