import React from "react";
import { useSelector } from "react-redux";
import { Header } from "src/component";
import { getMediaPicture } from "src/common/helper";
import { appSelector } from "src/store/selectors/index";

export const Detail = () => {
  const articalInfo = useSelector(appSelector.getArticleInfo());

  return (
    <>
      <Header
        day={0}
        onChange={()=>function(){}}
        title={"Detail Page"}
        showDays={false}
      />
      <div className="detail">
        <div className="title" data-testid="title">
          {articalInfo?.title}
        </div>

        <img
          src={getMediaPicture(articalInfo?.media)?.url}
          alt={articalInfo?.title}
          width={"50%"}
          height={"45%"}
        />

        <div className="descriptionDetail" data-testid="description">
          {articalInfo?.abstract}
        </div>
      </div>
    </>
  );
};

export default Detail;
