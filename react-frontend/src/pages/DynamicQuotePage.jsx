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
  const [companyFilingData, setCompanyFilingData] = useState([]);

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
          const { data } = await api.get(`/api/stock/${cik}/filings`);
  
          setCompanyFilingData(data);
          console.log(companyFilingData);
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
          <Table companyFilingData={companyFilingData}/>
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
            <Table companyFilingData={companyFilingData}/>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Statement of Cash Flows"
        />
        <div role="tabpanel" className="tab-content p-10">
            <Table companyFilingData={companyFilingData}/>
        </div>
      </div>
    </>
  );
};

export default DynamicStockPage;
