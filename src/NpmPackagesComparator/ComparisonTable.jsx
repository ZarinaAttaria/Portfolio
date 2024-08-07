import React from "react";
import "./App.css";

function ComparisonTable({ data }) {
  console.log("ComparisonTable data:", data);

  return (
    <>
      <h3 className="comparison-heading">Comparison</h3>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Repository</th>
              <th scope="col">Npm</th>
              <th scope="col">Homepage</th>
              <th scope="col">Stars</th>
              <th scope="col">Dependencies</th>
              <th scope="col">Version</th>
              <th scope="col">Size</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pkg, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{pkg.packageName || "N/A"}</td>
                <td>
                  <a href={pkg.repository || "#"}>
                    <img
                      src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                      className="link-icon"
                    />
                  </a>
                </td>
                <td>
                  <a href={pkg.npm || "#"}>
                    <img
                      src="https://img.icons8.com/?size=100&id=QERhMe8qpblP&format=png&color=000000"
                      className="link-icon"
                    />
                  </a>
                </td>
                <td>
                  <a href={pkg.homepage || "#"}>
                    <img
                      src="https://img.icons8.com/?size=100&id=85777&format=png&color=000000"
                      className="link-icon"
                    />
                  </a>
                </td>
                <td>{pkg.stars || "N/A"}</td>
                <td>
                  {pkg.dependencies.length > 0
                    ? pkg.dependencies.map((dep, depIndex) => (
                        <p key={depIndex}>
                          {dep.name} : {dep.version}
                        </p>
                      ))
                    : "Unknown"}
                </td>
                <td>{pkg.version || "Unknown"}</td>
                <td>
                  {pkg.size ? (pkg.size / 1000).toFixed(1) + "KB" : "Unknown"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ComparisonTable;
