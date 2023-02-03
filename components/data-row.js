import Link from 'next/link';

const DataRow = ({
    id,
    firstName,
    lastName,
    telephone,
    creditCard,
    loading,
}) => (
    <div className="dataRow">
    <p className={loading ? 'loading' : ''}>
      <Link href={`/customers/${id}`}>
        <p>
          {firstName} {lastName}
        </p>
      </Link>
    </p>
    <p className={`num ${loading ? 'loading' : ''}`}>{telephone}</p>
    <p className={`creditCard num ${loading ? 'loading' : ''}`}>{creditCard}</p>
  </div>
)

export default DataRow;