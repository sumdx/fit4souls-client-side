import React, { useEffect, useState } from "react";
import useAllClasses from "../Hooks/useAllClasses";
import ClassesCard from "../Components/ClassesCard";
import useCustomClassData from "../Hooks/useCustomClassData";

const AllClasses = () => {
  const [classesData] = useAllClasses();
 
  const  [search, setSearch] = useState("")
  const [numberOfPages, setNumberOfPages] = useState(10);
  const [itemPerPage, setitemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [allCustomClassData,refetch,totalCount,isFetching] = useCustomClassData(
    currentPage,
    itemPerPage,
    search
  );
  
   useEffect(() => {
      refetch();
    }, [itemPerPage, currentPage, refetch, search]); 

  useEffect(() => {
    setNumberOfPages(Math.ceil(totalCount / itemPerPage));
  }, [totalCount, itemPerPage]);

  const pages = [...Array(numberOfPages).keys()];

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };
  const handleNext = () => {
    if (currentPage != pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleSearch = (e) =>{
   setSearch(e.target.value);
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          All Classes
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We have experienced trainers to make your training journey smooth.
        </p>
       
      </div>
      <div>
        <div class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
            onChange={handleSearch}
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Classes..."
              required
            />
            
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-14 gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allCustomClassData?.map((classData) => {
          return <ClassesCard classData={classData}></ClassesCard>;
        })}
      </div>
      <div className="flex justify-center mt-6">
      <nav aria-label="Page navigation example">
        <ul class="flex items-center -space-x-px h-10 text-base">
          {/* prev button */}
          <li>
            <a
              onClick={handlePrev}
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {pages.map((page) => {
            return (
              <li>
                <a
                  onClick={() => handlePaginationClick(page + 1)}
                  className={
                    currentPage === page + 1
                      ? "flex items-center justify-center px-4 h-10 leading-tight text-white bg-blue-300 border border-gray-300 hover:bg-blue-100 hover:text-gray-700 dark:bg-blue-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
                      : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
                  }
                >
                  {page + 1}
                </a>
              </li>
            );
          })}

          {/* Next Button */}
          {}
          <li>
            <a
              onClick={handleNext}
              className={
                currentPage != pages.length
                  ? "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  : "flex cursor-not-allowed items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
              disabled={currentPage === pages.length - 1}
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      </div>
      
    </div>
  );
};

export default AllClasses;
