const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const maxPageLinks = 6;
  let startPage = Math.max(currentPage - Math.floor(maxPageLinks / 2), 1);
  let endPage = startPage + maxPageLinks - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxPageLinks + 1, 1);
  }

  const pageItems = [];
  for (let page = startPage; page <= endPage; page++) {
    pageItems.push(
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
          page === currentPage
            ? 'bg-indigo-600 text-white shadow-md'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-indigo-100'
        }`}
      >
        {page}
      </button>
    );
  }

  return (
    <div className="flex justify-center mt-6 space-x-1 text-gray-700">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'hover:bg-indigo-100'
        }`}
      >
        First
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'hover:bg-indigo-100'
        }`}
      >
        Prev
      </button>

      {startPage > 1 && <span className="px-2">...</span>}
      {pageItems}
      {endPage < totalPages && <span className="px-2">...</span>}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'hover:bg-indigo-100'
        }`}
      >
        Next
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'hover:bg-indigo-100'
        }`}
      >
        Last
      </button>
    </div>
  );
};

export default PaginationComponent;
