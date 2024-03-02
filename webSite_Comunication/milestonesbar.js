/** @type {import('@docusaurus/plugin-content-milestones').SidebarsConfig} */
const milestonesbars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    milestonesSidebar: [{type: 'autogenerated', dirName: 'milestones/'}],
  
    // But you can create a sidebar manually
    milestonesSidebar: [
      'intro',
      'hello',
      {
        type: 'category',
        label: 'Milestones',
        items: ['milestones'],
      },
    ],
  };
  
  export default milestonesbars;