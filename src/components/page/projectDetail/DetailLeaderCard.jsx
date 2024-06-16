import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LeaderCard from "../../basic/card/LeaderCard";
import { Project } from "../../../utils/repository";

export default function DetailLeaderCard() {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  const fetch = async () => {
    const detailData = await Project.ProjectDetail(id);
    setDetail(detailData);
  };

  useEffect(() => {
    fetch();
  }, [id]);

  if (!detail) {
    return <div>Loading...</div>;
  }

  const setUserId = () => {
    if (detail && detail.data.userId === 1) {
      return "Operator";
    }
    return detail.data.userId;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = String(date.getFullYear()).slice(2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const userItems = [
    {
      img: detail.data.thumbnailUrl,
      name: setUserId(),
      desc: "응답 : 있음",
      period: `${formatDate(detail.data.startDate)} ~ ${formatDate(detail.data.endDate)}`,
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
