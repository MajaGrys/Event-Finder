export default function Pagination({currentPage, numberOfPages, setCurrentPage}) {
    const previousPage = () => {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
        }
      }
  
    const nextPage = () => {
      if (currentPage !== numberOfPages) {
          setCurrentPage(currentPage + 1);
      }
    }
    
    return (
        <div className="pagination justify-content-center m-4">
            {currentPage !== 1 && <a className="page-link change-page" onClick={previousPage}>&laquo;</a>}
            <a className="page-link current-page">{currentPage} / {numberOfPages}</a>
            {currentPage !== numberOfPages && <a className="page-link change-page" onClick={nextPage}>&raquo;</a>}
        </div>
    )
}