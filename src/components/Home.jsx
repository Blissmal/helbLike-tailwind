import React from "react";
import CardHome from "./CardHome";
import { BiBook, BiPieChart, BiWallet } from "react-icons/bi";
import { BsFillPersonBadgeFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full p-4 space-y-6 overflow-x-hidden">
      {/* Card Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardHome text="My Loans" divColor="bg-blue-600" logo={<BiWallet />} />
        <CardHome text="Repay Loan" divColor="bg-orange-600" logo={<BiPieChart />} />
        <CardHome text="HELB Student Loan Statement" divColor="bg-green-600" logo={<BsFillPersonBadgeFill />} />
        <CardHome text="Clearance Certificate" divColor="bg-red-600" logo={<BiBook />} />
      </div>

      {/* Notification Section */}
      <div className="w-full flex flex-col justify-center items-center rounded-md p-6 bg-white border border-green-600 text-center">
        <h2 className="text-xl text-gray-600 border-b border-gray-400 pb-2 mb-4">
          DEAR <span className="font-bold">BETHUEL</span>, YOU HAVE{" "}
          <span className="font-bold">
            NOT CHECKED OR SELECTED{" "}
            <span className="text-red-700">SCHOLARSHIP</span> OPTION !
          </span>
        </h2>
        <p className="text-md">
          To qualify for <b>UNIVERSITY SCHOLARSHIP</b>, you need to indicate
          your interest by selecting the SCHOLARSHIP option within the{" "}
          <b>&quot;Complete Profile&quot;</b> tab.{" "}
          <span className="font-bold cursor-pointer text-blue-500">
            CLICK HERE
          </span>{" "}
          to express interest for Scholarship.
        </p>
      </div>

      {/* Profile Completion Section */}
      <div className="w-full flex flex-col justify-center items-center rounded-md p-6 bg-white border border-green-600 text-center">
        <p className="text-md">
          Your Profile is <span className="text-green-600 font-bold">100% complete!</span>
        </p>
        <div className="w-full bg-gray-300 h-2 rounded-full mt-2">
          <div className="bg-green-600 h-2 w-full rounded-full" />
        </div>
      </div>

      {/* Loan Application Section */}
      <div className="w-full flex flex-col p-6 mt-6 rounded-md bg-white border border-green-600">
        <div className="flex items-center justify-between">
          <div className="text-center flex-grow mx-4">
            <p className="text-lg font-bold text-blue-600">
              PROCEED TO APPLYING HELB STUDENT LOAN!
            </p>
            <p className="text-sm text-blue-600">
              You MUST APPLY for HELB STUDENT LOAN by selecting one of the Loan Product(s) below to access funds for meeting your program cost.
            </p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-full flex flex-col p-6 mt-6 rounded-md bg-white border border-green-600">
        <h1 className="text-center text-xl font-semibold mb-4">Helb Loan Application - NOT Employed Category</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Product Name</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level of Study</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Academic Year</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Closing Date</th>
                <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 whitespace-nowrap">1</td>
                <td className="px-4 py-2 whitespace-nowrap">First Time Undergraduate Loan</td>
                <td className="px-4 py-2 whitespace-nowrap">Degree</td>
                <td className="px-4 py-2 whitespace-nowrap">2024/2025</td>
                <td className="px-4 py-2 whitespace-nowrap">31st-Dec-2024</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button className=" hover:bg-green-500 bg-green-600 text-white px-4 py-1 rounded-full transition-colors duration-300">Open</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
