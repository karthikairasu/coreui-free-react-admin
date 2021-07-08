import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Monitoring']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'DASHBOARD',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'REPORTS',
    to: '/charts',
    icon: 'cil-list'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'DEVICES',
    to: '/',
    icon: 'cil-devices'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'USERS',
    to: '/',
    icon: 'cil-user'
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'CHAMBER',
    route: '/chamber',
    icon: 'cil-square',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'ADD CHAMBER',
        icon: 'cil-hand-point-right',
        to: '/chamber/AddChamber',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CHAMBER LIST',
        icon: 'cil-hand-point-right',
        to: '/chamber/ChamberList',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'WAREHOUSE',
    route: '/warehouse',
    icon: 'cil-building',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'ADD WAREHOUSE',
        icon: 'cil-hand-point-right',
        to: '/warehouse/AddWarehouse',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'WAREHOUSE LIST',
        icon: 'cil-hand-point-right',
        to: '/warehouse/WarehouseList',
      }
    ],
  },
   {
    _tag: 'CSidebarNavTitle',
    _children: ['Pages']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'CONFIGURATION',
    route: '/warehouse',
    icon: 'cil-settings',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'DEVICES',
        icon: 'cil-hand-point-right',
        to: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ALERTS',
        icon: 'cil-hand-point-right',
        to: '',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'USERS',
        icon: 'cil-hand-point-right',
        to: '',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'ABOUTS US',
    to: '/',
    icon: 'cil-info'
  },
  // {
  //  _tag: 'CSidebarNavItem',
  //  name: 'Charts',
  //  to: '/charts',
  //  icon: 'cil-chart-pie'
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/notifications/toaster'
  //     }
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
