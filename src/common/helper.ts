export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export const getMonthAndDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  return month + " " + day;
};

export const getMediaPicture = (media: any) => {
    const pictureObject = media?.[0]?.['media-metadata']?.[1];
    return pictureObject;
};
