import React from "react";
import { getMonthAndDate, getMediaPicture } from "src/common/helper";

type ArticalListProps = {
  articalList: Array<any>;
};

const ArticalList: React.FC<ArticalListProps> = ({ articalList }) => {
  const openInNewTab = (url: string): void => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="artical">
      {articalList?.map((artical: any) => (
        <div
          data-testid={`articleCard-${artical?.id}`}
          key={artical?.id}
          className="card articalItem"
          onClick={() => openInNewTab(artical?.url)}
        >
          <div className="header">
            <div className="col-md-2" data-testid="publishedDate">
              {getMonthAndDate(artical?.published_date)}
            </div>
            <div className="col-md-6">
              <div data-testid="section">{artical?.section}</div>
              <div className="title" data-testid="title">
                {artical?.title}
              </div>
              <div className="description" data-testid="description">
                {artical?.abstract}
              </div>
              <div id="byline">{artical?.byline}</div>
              <div className="viewBorder"></div>
              <div className="copyright" data-testid="copyRight">
                COPYRIGHT - {artical?.media?.[0]?.copyright}
              </div>
            </div>
            <div className="col-md-4 image" data-testid="image">
              <img
                src={getMediaPicture(artical?.media)?.url}
                alt={artical?.title}
                width={"90%"}
                height={"85%"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticalList;
