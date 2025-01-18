import React from "react";
import useAllNewsletter from "../../../Hooks/useAllNewsletter";

const AllNewsletterSubscribers = () => {
  const [allNewsletterData] = useAllNewsletter();
  console.log(allNewsletterData);

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 class="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          All Newsletter Data
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We have experienced trainers to make your training journey smooth.
        </p>
      </div>
      <div className="mt-20">
        <div class="relative overflow-x-auto w-3/4 mx-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email Adress
                </th>
              </tr>
            </thead>
            <tbody>
              {allNewsletterData.map((data) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.name}
                    </th>
                    <td class="px-6 py-4 text-center">{data.email}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllNewsletterSubscribers;
