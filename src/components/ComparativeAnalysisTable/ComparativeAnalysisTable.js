import PropTypes from "prop-types";

import "./ComparativeAnalysisTable.styles.css";

const ProductPersistence = ({ value }) => {
  const persistence = Number(value);
  const isNegative = persistence < 0;
  const persistenceToPercentage = persistence * 100;
  const className = isNegative
    ? "negative-persistence"
    : "positive-persistence";
  const persistenceFormatted = Number(
    String(persistenceToPercentage).replaceAll("-", "")
  );

  return <span className={className}>{persistenceFormatted}%</span>;
};

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ProductPrice = ({ value }) => {
  return <span>{moneyFormatter.format(value)}</span>;
};

const ComparativeAnalysisTable = ({ data = [] }) => {
  return (
    <table className="ComparativeAnalysisTable">
      <thead className="table-header">
        <tr>
          <th />
          <td className="table-header-label">Name</td>
          <td className="table-header-label">SKU</td>
          <td className="table-header-label">% Persistence</td>
          <td className="table-header-label">Av. Price</td>
          <td className="table-header-label">Av. Position</td>
        </tr>
      </thead>
      <tbody className="table-body">
        {data.map((product) => {
          return (
            <tr key={product.id}>
              <td className="table-cell">
                <img
                  alt={product.name}
                  className="product-image"
                  src={product.productImage}
                />
              </td>
              <td className="table-cell">{product.name}</td>
              <td className="table-cell">{product.sku}</td>
              <td className="table-cell">
                <ProductPersistence value={product.persistence} />
              </td>
              <td className="table-cell">
                {<ProductPrice value={product.averagePrice} />}
              </td>
              <td className="table-cell">{product.averagePosition}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ComparativeAnalysisTable.propTypes = {
  data: PropTypes.array,
};

export default ComparativeAnalysisTable;
