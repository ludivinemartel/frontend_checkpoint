import AddCountryForm from "@/components/AddCountries";
import CountriesList from "@/components/CountriesList";

export default function Home() {
  return (
    <div>
      <AddCountryForm />
      <CountriesList />
    </div>
  );
}
