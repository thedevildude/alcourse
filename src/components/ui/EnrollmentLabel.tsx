interface EnrollmentLabelProps {
  className?: string;
  status: "Open" | "Closed" | "In Progress";
}

const EnrollmentLabel = ({ status, className }: EnrollmentLabelProps) => {
  return (
    <div className={className}>
      {status === "Open" && (
        <span className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-xl text-sm">
          {status}
        </span>
      )}
      {status === "Closed" && (
        <span className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-xl text-sm">
          {status}
        </span>
      )}
      {status === "In Progress" && (
        <span className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-xl text-sm">
          {status}
        </span>
      )}
    </div>
  );
};

export default EnrollmentLabel;
