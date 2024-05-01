import LeaderCard from "../../basic/card/LeaderCard";

export default function DetailLeaderCard() {
  const userItems = [
    {
      img: "",
      name: "Hanokfairy",
      desc: "응답 : 있음",
      period: "24.03.02 ~ 24.04.22",
      field: "소셜네트워크",
    },
  ];
  return (
    <div className="flex-1">
      {userItems.map((u) => {
        return (
          <LeaderCard
            key={u.name}
            img={u.img}
            name={u.name}
            desc={u.desc}
            period={u.period}
            field={u.field}
            follow
          />
        );
      })}
    </div>
  );
}
