import React from "react";
import { DAYS_LIST } from "../../common/contants";

type HeaderProps = {
  day: number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  title: string;
  showDays: boolean;
};

const Header: React.FC<HeaderProps> = ({ day, onChange, title, showDays }) => {
  return (
    <div className="header">
      <h1 className="col heading" data-testid="mostPopularArticle">
        {title}
      </h1>
      {showDays ? (
        <div className="col selectDays">
          <h3 className="heading3" data-testid="selectDays">
            Select Days
          </h3>
          <select
            data-testid="selectDay"
            name="day"
            value={day}
            onChange={onChange}
            className="border p-2"
          >
            <option value="" disabled>
              Select Day
            </option>
            {DAYS_LIST.map((day) => (
              <option key={day} value={day} data-testid={`day-${day}`}>
                {day}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
