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
        <div className="pagination justify-content-center">
            {currentPage !== 1 && <button className="page-link change-page" onClick={previousPage}>&laquo;</button>}
            <span className="page-link current-page">{currentPage} / {numberOfPages}</span>
            {currentPage !== numberOfPages && <button className="page-link change-page" onClick={nextPage}>&raquo;</button>}
        </div>
    )
}