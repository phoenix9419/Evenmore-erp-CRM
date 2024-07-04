const useDate = ({ settings }) => {
  const { evenmore_app_date_format } = settings;

  const dateFormat = evenmore_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
