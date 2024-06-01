import Card from "@/app/components/products/Card";
const page = () => {
  const cars = [
    {
      type: "Premium SUV",
      model: "Cadillac Escalade ESV",
      passengers: "6",
      suitcases: "6",
    },
    {
      type: "Executive SUV",
      model: "Mercedes GLS",
      passengers: "6",
      suitcases: "6",
    },
    {
      type: "Premium Sedan",
      model: "Cadillac CT6 or Similar",
      passengers: "1-3",
      suitcases: "2",
    },
    {
      type: "Executive Sedan",
      model: "BMW X1",
      passengers: "1-3",
      suitcases: "4",
    },
    {
      type: "Limousine Van",
      model: "Mercedes Sprinter or Similar",
      passengers: "11-14",
      suitcases: "8",
    },
    {
      type: "Executive Van",
      model: "Ford Transit Van",
      passengers: "7-14",
      suitcases: "14",
    },
    {
      type: "Specialty Limousine",
      model: "Cadillac Limousine or Similar",
      passengers: "Up to 15",
      suitcases: "—",
    },
    {
      type: "Stretch Limo",
      model: "MKT Limousine or Similar",
      passengers: "6-10",
      suitcases: "—",
    },
    {
      type: "Minibus",
      model: "Freightliner Minibus",
      passengers: "24-38",
      suitcases: "25+",
    },
    {
      type: "Party Bus",
      model: "Party Bus",
      passengers: "30",
      suitcases: "—",
    },
    {
      type: "Executive Motor Coach",
      model: "Motorcoach",
      passengers: "57",
      suitcases: "57+",
    },
  ];

  return (
    <div className="xl:px-[200px] p-4 lg:p-0 lg:px-[100px]">
      <div className="lg:pt-12 pt-6">Home/Fleet</div>
      <div className="flex w-full items-center justify-center">
        <h3 className="text-4xl uppercase lg:pt-[132px] pt-8">Fleet</h3>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 my-9  gap-y-5 gap-x-3">
        {cars.map((items) => {
          return (
            <Card
              type={items.type}
              model={items.model}
              passengers={items.passengers}
              suitcases={items.suitcases}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
