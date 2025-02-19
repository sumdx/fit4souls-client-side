import React from "react";
import useStatData from "../../../Hooks/useStatData";
import Loading from "../../../Components/Loading";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { MdOutlineAccountBalance } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const Balance = () => {
  const [adminStat, isStatFetching] = useStatData();
  if (isStatFetching) {
    return <Loading></Loading>;
  }
  const data = [
    { name: "Newsletter subscriber", value: adminStat.newsletterlength },
    { name: " Total Paid members", value: adminStat.paidUser },
  ];
  const RADIAN = Math.PI / 180;
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-8 border ">
      <Helmet>
                      <title>Fit4Soul | Balance</title>
        </Helmet>
      <div className="">
        <h1 class="mb-4 ml-5 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
          <mark class="px-4 py-1 text-white bg-blue-600 rounded dark:bg-blue-500">
            Hi,
          </mark>{" "}
          Welcome back.
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-6 border p-4 rounded-xl">
        <div className="lg:w-2/5 flex flex-col bg-blue-700 text-white px-8 py-10 rounded-xl shadow-inner">
        <MdOutlineAccountBalance size={70} />
          <div className="mt-4">
            
            <h1>Balance</h1>
            <h1 className="text-4xl font-bold">
              {" "}
              USD ${adminStat.totalBalance}
            </h1>
          </div>

          
        </div>
        <div className="lg:w-3/5 text-center flex justify-center bg-gray-100 shadow-inner dark:bg-gray-700 border-gray-800 text-blue-700 px-8 py-10 rounded-xl">
          <PieChart width={400} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
        {/* <div className="md:w-1/4 bg-blue-700 text-white px-8 py-10 rounded-xl shadow-inner">
          <h1>Balance</h1>
          <h1 className="text-4xl font-bold"> USD ${adminStat.totalBalance}</h1>
        </div> */}
      </div>

      <div className="border mt-20  bg-white dark:bg-gray-700  ">
        <h1 className="text-xl text-center mt-4 font-bold dark:text-white">
          Last 6 Transactions :
        </h1>
        <div className="p-4">
          <div class="relative overflow-x-auto mx-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email Adress
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Trasaction Id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Package Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {adminStat.recentTransaction?.map((data) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 flex items-center text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex items-center justify-center gap-4">
                          <img
                            class="w-10 h-10 rounded-full"
                            src={data.user.photoURL}
                            alt="Rounded avatar"
                          />
                          {data.user.name}
                        </div>
                      </th>

                      <td class="px-6 py-4 text-center">{data.user.email}</td>
                      <td class="px-6 py-4 text-center">
                        {data.paymentInfo.trxId}
                      </td>
                      <td class="px-6 py-4 text-center">
                        USD ${data.pricingInfo.packagePrice}
                      </td>
                      <td class="px-6 py-4 text-center">
                        {data.pricingInfo.packageName}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
