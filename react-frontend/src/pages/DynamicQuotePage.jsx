import { useParams } from "react-router-dom";

import api from "../api";
import { useEffect, useState } from "react";
import Table from "../components/Table";

//https://companieslogo.com/
//lightweightcharts
// yahoo finance api

const DynamicStockPage = () => {
  const { cik } = useParams();
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const stockRes = async () => {
        try {
          const { data } = await api.get(`/api/stock/${cik}`);
  
          setCompanyData(data);
          console.log(data);
        } catch (e) {
          alert(e);
        }
      };

    const filingRes = async () => {
        try {
          const { data } = await api.get(`/api/stock/${cik}`);
  
          setCompanyData(data);
          console.log(data);
        } catch (e) {
          alert(e);
        }
      };
  
      stockRes();
      filingRes();

  }, [])
  

  return (
    <>
        <h1>{companyData.company_name} - {companyData.ticker}</h1>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Income Statement"
        />
        <div role="tabpanel" className="tab-content p-10">
          <Table/>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Balance Sheet"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
            <Table/>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Statement of Cash Flows"
        />
        <div role="tabpanel" className="tab-content p-10">
            <Table/>
        </div>
      </div>
    </>
  );
};

export default DynamicStockPage;
