const useAppSettings = () => {
  let settings = {};
  settings['evenmore_app_email'] = 'noreply@evenmoreapp.com';
  settings['evenmore_base_url'] = 'https://cloud.evenmoreapp.com';
  return settings;
};

module.exports = useAppSettings;
