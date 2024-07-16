import React from "react";
import { getMonthAndDate, getMediaPicture } from "src/common/helper";
import { useDispatch } from "react-redux";
import { appSliceActions } from "src/store/reducers/appSlice";
import { useNavigate } from "react-router-dom";

type ArticalListProps = {
  articalList: Array<any>;
};

const ArticalList: React.FC<ArticalListProps> = ({ articalList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openInNewTab = (article: any): void => {
    dispatch(appSliceActions.setArticleInfo(article));
    navigate(`/detail/${article?.id}`);
  };

  return (
    <div className="artical">
      {articalList?.map((artical: any) => (
        <div
          data-testid={`articleCard-${artical?.id}`}
          key={artical?.id}
          className="card articalItem"
          onClick={() => openInNewTab(artical)}
        >
          <div className="header">
            <div className="col-md-2" data-testid="publishedDate">
              {getMonthAndDate(artical?.published_date)}
            </div>
            <div className="col-md-7">
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
            <div className="col-md-3 image" data-testid="image">
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
