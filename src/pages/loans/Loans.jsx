import { Link } from "react-router-dom";

const Loans = () => {
  return (
    <div className="p-4">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">My Loans and Scholarships</h2>
        <span className="font-light text-sm">
          <Link to="/" className="text-blue-600 hover:text-blue-500">
            Dashboard
          </Link>{" "}
          -{" "}
          <Link to="/loans" className="text-blue-600 hover:text-blue-500">
            Loans
          </Link>{" "}
          - My-Loans
        </span>
      </div>
      <div className="mb-4 bg-white px-6 py-4 overflow-auto rounded-md shadow-xl">
        <h3 className="text-lg font-semibold mb-4">My Loans</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Loan status</th>
              <th className="border p-2">Amount Allocated</th>
              <th className="border p-2">Academic Year</th>
              <th className="border p-2">Serial No</th>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">View details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 text-purple-600">
                Disbursement in Progress
              </td>
              <td className="border p-2">136,800.00</td>
              <td className="border p-2">2023/2024</td>
              <td className="border p-2">2310038251</td>
              <td className="border p-2">Undergraduate Studies</td>
              <td className="border p-2">
                <Link
                  to="/loans/viewLoan"
                  className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                >
                  View Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white px-6 py-4 overflow-auto rounded-md shadow-xl">
        <h3 className="text-lg font-semibold mb-4">My Scholarships</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Application No</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Academic Year</th>
              <th className="border p-2">Admission No</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">University</th>
              <th className="border p-2">Semester</th>
              <th className="border p-2">Batch No</th>
              <th className="border p-2">Disbursement Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">SA000035913</td>
              <td className="border p-2">Paid</td>
              <td className="border p-2">2023/2024</td>
              <td className="border p-2">PA106/G/18040/23</td>
              <td className="border p-2">61,200</td>
              <td className="border p-2">
                BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING
              </td>
              <td className="border p-2">KIRINYAGA UNIVERSITY</td>
              <td className="border p-2">S1</td>
              <td className="border p-2">SD0002</td>
              <td className="border p-2">25-Jan-2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Loans;
