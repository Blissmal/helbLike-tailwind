import { BiPrinter } from "react-icons/bi";
import { Link } from "react-router-dom";

const ViewLoansTab = () => {
  const payments = [
    {
      action: "Upkeep loan issue to student bank sem 1",
      dateProcessed: "08/11/2023",
      amount: "22,500",
      admissionNumber: "PA106/G/18040/23",
      institution: "KIRINYAGAU",
      batchNumber: "HELB-005192",
      paymentStatus: "Paid to account on 08/11/2023",
    },
    {
      action: "Tuition loan issue to institution KIRINYAGAU sem 1",
      dateProcessed: "15/11/2023",
      amount: "45,900",
      admissionNumber: "PA106/G/18040/23",
      institution: "KIRINYAGAU",
      batchNumber: "HELB-005212",
      paymentStatus: "Paid to account on 15/11/2023",
    },
    {
      action: "Upkeep loan issue to student bank sem 2",
      dateProcessed: "19/12/2023",
      amount: "22,000",
      admissionNumber: "PA106/G/18040/23",
      institution: "KIRINYAGAU",
      batchNumber: "HELB-005313",
      paymentStatus: "Paid to account on 20/12/2023",
    },
    {
      action: "Upkeep loan issue to student bank sem 2",
      dateProcessed: "19/12/2023",
      amount: "500",
      admissionNumber: "PA106/G/18040/23",
      institution: "KIRINYAGAU",
      batchNumber: "HELB-005313",
      paymentStatus: "Paid to account on 20/12/2023",
    },
    {
      action: "Tuition loan issue to institution KIRINYAGAU sem 2",
      dateProcessed: "02/02/2024",
      amount: "45,900",
      admissionNumber: "PA106/G/18040/23",
      institution: "KIRINYAGAU",
      batchNumber: "HELB-005425",
      paymentStatus: "Paid to account on 09/02/2024",
    },
  ];

  return (
    <div className="p-4 font-poppins">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Loan Applications</h2>
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
      <div className="bg-white p-6 rounded-lg shadow-xl overflow-auto">
        <table className="w-full text-right border border-collapse mb-4">
          <tbody>
          <tr>
            <th className="p-2 gap-5 flex justify-end">
              <button className="text-sm font-light text-white bg-red-600 px-3 rounded-full">
                <BiPrinter className="inline-block mr-2"/>
                print Disbursement Report
              </button>
              <button className="text-sm font-light text-white bg-red-600 px-3 rounded-full">
              <BiPrinter className="inline-block mr-2"/>
                print Award Letter
              </button>
            </th>
          </tr>
          </tbody>
        </table>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Action</th>
              <th className="border p-2">Date Processed</th>
              <th className="border p-2">Amount (KSHs.)</th>
              <th className="border p-2">Admission Number</th>
              <th className="border p-2">Institution</th>
              <th className="border p-2">Batch Number</th>
              <th className="border p-2">Payment status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {payments.map((payment, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2">{payment.action}</td>
                <td className="border p-2">{payment.dateProcessed}</td>
                <td className="border p-2">{payment.amount}</td>
                <td className="border p-2">{payment.admissionNumber}</td>
                <td className="border p-2">{payment.institution}</td>
                <td className="border p-2">{payment.batchNumber}</td>
                <td className="border p-2">{payment.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLoansTab;
