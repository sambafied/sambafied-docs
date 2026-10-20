module.exports = {
 docs: [
  'index',
  {type: 'category', label: 'DAM Client', collapsed: false, items: [
   'dam-client/overview', 'dam-client/getting-started',
   {type: 'category', label: 'Connect AEM', items: ['dam-client/connect-local-aem', 'dam-client/connect-cloud-aem', 'dam-client/multiple-instances']},
   {type: 'category', label: 'Work with assets', items: ['dam-client/folder-workflow', 'dam-client/find-and-open-assets', 'dam-client/edit-and-publish', 'dam-client/conflicts-and-recovery']},
   'dam-client/preferences-and-storage', 'dam-client/status', 'dam-client/troubleshooting', 'dam-client/adobe-context',
  ]},
 ],
};
