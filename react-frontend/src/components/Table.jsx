import PropTypes from "prop-types";

const Table = ({ companyFilingData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {companyFilingData.map((row) => {
            return (            
            <tr key={row.adsh}>
              <th>{row.adsh}</th>
              <td>{row.stock_cik}</td>
              <td>{row.filed}</td>
              <td>{row.form}</td>
              <td>{row.period}</td>
            </tr>
            );

          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  companyFilingData: PropTypes.array.isRequired,
};
export default Table;
