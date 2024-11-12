import React, { useEffect, useState } from "react";
import SearchForm from "./common/SearchForm"
import JoblyApi from "./helpers/Api";
import LoadingSign from "./common/LoadingSign"
import CompanyCard from "./CompanyCard";

const Companies = () => {

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompanies() {
    search();
  }, []);


  async function search(name) {
    let res = await JoblyApi.getCompanies(name);
    setCompanies(res);
  }

  if (!companies) return <LoadingSign />;

  return(
    <div className="containter text-center pt-3">
      <div className="CompanyList col-md-8 offset-md-2">
        <SearchForm searchFor={search} />
        {companies.length
          ? (
          <div className="CompanyList-list">
          {companies.map(c => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
          </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
      </div>
    </div>
  )
}

export default Companies;