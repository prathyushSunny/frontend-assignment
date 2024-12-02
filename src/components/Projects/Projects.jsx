import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import useProjects from "../../helpers/useProjects";

export default function Projects() {
  const {
    projects,
    page,
    setPage,
    pageData,
    maxPages,
    pageSize,
    setPageSize
  } = useProjects();

  const onNext = () => setPage(page => page += 1);
  const onPrevious = () => setPage(page => page -= 1);

  return (
    <>
      <Table pageData={pageData} />
      <Pagination
        page={page}
        onNext={onNext}
        onPrevious={onPrevious}
        maxPages={maxPages}
        pageSize={pageSize}
        totalItems={projects.length}
        setPageSize={setPageSize}
      />
    </>
  )
}