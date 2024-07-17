import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticalCreator } from "src/store/reducers/index";
import { appSelector } from "src/store/selectors/index";
import { ArticalList, Header, Loader } from "src/component";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const loading = useSelector(appSelector.getLoading());
  const articalList = useSelector(appSelector.getArticals());
  const [day, setDay] = useState(1);

  useEffect(() => {
    dispatch(getArticalCreator(day));
  }, [dispatch, day]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setDay(Number(value));
  };

  return (
    <>
      <Header
        day={day}
        onChange={handleChange}
        title={"Most Popular Articles"}
        showDays={true}
      />
      <ArticalList articalList={articalList} />
      <Loader isLoading={loading} />
    </>
  );
};

export default Dashboard;
