// ** Type import
import { VerticalNavItemsType } from '@/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    // {
    //   path: '/acl',
    //   action: 'read',
    //   subject: 'acl-page',
    //   title: 'Access Control',
    //   icon: 'tabler:shield'
    // },
    // {
    //   path: '/test-page',
    //   subject: 'acl-page',
    //   title: 'Test-Page',
    //   icon: 'tabler:shield'
    // },
    {
      path: '/dashboard',
      title: 'Dashboard',
      icon: 'tabler:layout-dashboard'
    },
    {
      title: 'Quản lý',
      icon: 'tabler:subtask',
      subject: 'management',
      children: [
        {
          title: 'Takeout',
          path: '/management/takeout',
          icon: 'tabler:receipt'
        },
        {
          title: 'Máy quét',
          path: '/management/scanner',
          icon: 'tabler:device-camera-phone'
        },
        {
          title: 'Xe chuyên dụng',
          path: '/management/dolly',
          icon: 'tabler:trolley'
        },
        {
          title: 'Kho',
          path: '/management/store',
          icon: 'tabler:building-warehouse'
        },
        {
          title: 'Maker',
          path: '/management/maker',
          icon: 'tabler:building-factory-2'
        },
        {
          title: 'Lịch sử',
          path: '/management/history',
          icon: 'tabler:history'
        }
      ]
    },
    {
      path: '/system',
      title: 'Hệ thống',
      icon: 'tabler:device-desktop-analytics',
      children: [
        {
          title: 'Loại xe',
          path: '/system/vehicle',
          icon: 'tabler:git-fork'
        },
        {
          title: 'Tài khoản',
          path: '/system/account',
          icon: 'tabler:user'
        },
        {
          title: 'Phân quyền',
          path: '/system/roll',
          icon: 'tabler:triangle-square-circle'
        },
        {
          title: 'Cài đặt',
          path: '/system/setting',
          icon: 'tabler:settings'
        }
      ]
    }
  ]
}

export default navigation
