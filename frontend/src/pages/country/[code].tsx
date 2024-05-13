import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../../graphql/queries/queries';

function CountryDetail() {
  const router = useRouter();
  const { code } = router.query;
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;

  return (
    <div>
      <h1  className="header-title">Details du pays</h1>
      <div>
      <p>Nom : {country.name}</p>
        <p>Code : {country.code}</p>
        <p>Emoji : {country.emoji}</p>
      </div>
    </div>
  );
}

export default CountryDetail;
