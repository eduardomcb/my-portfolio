import KnowTech from "./ui/know-tech";
import { fetchHygraphQuery } from "@/app/utils/fetch-graphql";

const getData = async () => {
  const query = `
  query MyQuery {
  knowledges {
    name
    iconSvg
    startDate
  }
}
`;

  return fetchHygraphQuery(query, 60);
};

export default async function Knowledge() {
  const response = await getData();
  // console.log(response);
  return (
    <div className="mb-10">
      <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
        Conhecimentos
      </h1>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3 mt-5">
        {response.knowledges.map((tech) => (
          <KnowTech
            key={tech.name}
            tech={{
              icon: tech.iconSvg,
              name: tech.name,
              startDate: tech.startDate,
            }}
          />
        ))}
      </div>
    </div>
  );
}
