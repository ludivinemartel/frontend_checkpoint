import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries/queries';

interface Country {
  id: string;
  name: string;
  code: string;
  emoji: string;
}

function CountriesList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="countries-container">
       <h1 className="header-title-list" >Liste des pays</h1>
      <ul className="countries-list">
        {data.countries.map((country: Country) => (
          <li key={country.id} className="country-item">
            <Link href={`/country/${country.code}`}>
              {country.name} - {country.code} {country.emoji}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;