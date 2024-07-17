import React from "react";
import { useSelector } from "react-redux";
import { Header } from "src/component";
import { getMediaPicture } from "src/common/helper";
import { appSelector } from "src/store/selectors/index";

export const Detail = () => {
  const articalInfo = useSelector(appSelector.getArticleInfo());

  return (
    <>
      <Header title={"Detail Page"} showDays={false} />
      {Object?.keys(articalInfo)?.length !== 0 ? (
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
      ) : (
        <div>No Article Found</div>
      )}
    </>
  );
};

export default Detail;
