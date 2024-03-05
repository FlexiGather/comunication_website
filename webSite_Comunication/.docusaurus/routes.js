import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/comunication_website/blog',
    component: ComponentCreator('/comunication_website/blog', '880'),
    exact: true
  },
  {
    path: '/comunication_website/blog/archive',
    component: ComponentCreator('/comunication_website/blog/archive', '97b'),
    exact: true
  },
  {
    path: '/comunication_website/blog/milestone 1',
    component: ComponentCreator('/comunication_website/blog/milestone 1', 'ec6'),
    exact: true
  },
  {
    path: '/comunication_website/blog/milestone 2',
    component: ComponentCreator('/comunication_website/blog/milestone 2', '3bd'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags',
    component: ComponentCreator('/comunication_website/blog/tags', '446'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/communication-plan',
    component: ComponentCreator('/comunication_website/blog/tags/communication-plan', '443'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/elaboration-fase',
    component: ComponentCreator('/comunication_website/blog/tags/elaboration-fase', '82a'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/inception-fase',
    component: ComponentCreator('/comunication_website/blog/tags/inception-fase', '6aa'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/milestones',
    component: ComponentCreator('/comunication_website/blog/tags/milestones', '63b'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/objectives',
    component: ComponentCreator('/comunication_website/blog/tags/objectives', '9ab'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/presentation',
    component: ComponentCreator('/comunication_website/blog/tags/presentation', 'e9a'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/project-calendar',
    component: ComponentCreator('/comunication_website/blog/tags/project-calendar', '990'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/requirements-elicitation',
    component: ComponentCreator('/comunication_website/blog/tags/requirements-elicitation', '147'),
    exact: true
  },
  {
    path: '/comunication_website/blog/tags/system-architecture',
    component: ComponentCreator('/comunication_website/blog/tags/system-architecture', '521'),
    exact: true
  },
  {
    path: '/comunication_website/markdown-page',
    component: ComponentCreator('/comunication_website/markdown-page', 'a01'),
    exact: true
  },
  {
    path: '/comunication_website/docs',
    component: ComponentCreator('/comunication_website/docs', '5b3'),
    routes: [
      {
        path: '/comunication_website/docs',
        component: ComponentCreator('/comunication_website/docs', '762'),
        routes: [
          {
            path: '/comunication_website/docs',
            component: ComponentCreator('/comunication_website/docs', 'e44'),
            routes: [
              {
                path: '/comunication_website/docs/about_us',
                component: ComponentCreator('/comunication_website/docs/about_us', 'ccd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-project/context',
                component: ComponentCreator('/comunication_website/docs/about-project/context', '7ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/architecture',
                component: ComponentCreator('/comunication_website/docs/about-system/architecture', '4f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/database',
                component: ComponentCreator('/comunication_website/docs/about-system/database', '6bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/prototype/access_interface',
                component: ComponentCreator('/comunication_website/docs/about-system/prototype/access_interface', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/prototype/dashboard',
                component: ComponentCreator('/comunication_website/docs/about-system/prototype/dashboard', '874'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/prototype/kiosk_interface',
                component: ComponentCreator('/comunication_website/docs/about-system/prototype/kiosk_interface', '5cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/prototype/management_interface',
                component: ComponentCreator('/comunication_website/docs/about-system/prototype/management_interface', '441'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/prototype/medical_interface',
                component: ComponentCreator('/comunication_website/docs/about-system/prototype/medical_interface', '6b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/prototype/user_interface',
                component: ComponentCreator('/comunication_website/docs/about-system/prototype/user_interface', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/requirements',
                component: ComponentCreator('/comunication_website/docs/about-system/requirements', '33c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/about-system/technologies',
                component: ComponentCreator('/comunication_website/docs/about-system/technologies', '8c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/category/project-informations',
                component: ComponentCreator('/comunication_website/docs/category/project-informations', '9a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/category/prototype',
                component: ComponentCreator('/comunication_website/docs/category/prototype', 'ed0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/comunication_website/docs/category/system-informations',
                component: ComponentCreator('/comunication_website/docs/category/system-informations', 'bc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/comunication_website/',
    component: ComponentCreator('/comunication_website/', 'c3b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
