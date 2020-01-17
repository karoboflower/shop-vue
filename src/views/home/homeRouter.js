/*
 * @Author: wangchunhua
 * @Date: 2019-07-29 17:04:49
 * @Description: 
 */
export default {

    path: '/home',
    name: 'home',
    meta: {
      requireAuth: true
    },
    component: () => import('./home.vue'),
    redirect: '/index',
    children: [
      // 首页
      {
        path: '/index',
        name: 'index',
        meta: {
            requireAuth: true
        },
        component: () => import('../index/index.vue'),
      },
      // 商品管理
      {
        path: '/goods',
        name: 'goods',
        meta: {
            requireAuth: true
        },
        component: () => import('../goods/goods.vue'),
        redirect: '/goodsList',
        children: [{
            path: '/goodsList',
            name: 'goodsList',
            meta: {
                requireAuth: true
            },
            component: () => import('../goods/children/goodsList.vue'),
          },
          {
            path: '/goodsKind',
            name: 'goodsKind',
            meta: {
                requireAuth: true
            },
            component: () => import('../goods/children/goodsKind.vue'),
          },
          {
            path: '/goodsAdd',
            name: 'goodsAdd',
            meta: {
                requireAuth: true
            },
            component: () => import('../goods/children/goodsAdd.vue'),
          },
          {
              path: '/goodsUpdate',
              name: 'goodsUpdate',
              meta: {
                requireAuth: true
              },
              component: () => import('../goods/children/goodsUpdate.vue'),
            },
         
          {
              path: '/goodsKindSet',
              name: 'goodsKindSet',
              meta: {
                requireAuth: true
              },
              component: () => import('../goods/children/goodsKindSet.vue'),
         
            },
            {
              path: '/goodsSpec',
              name: 'goodsSpec',
              meta: {
                requireAuth: true
              },
              component: () => import('@/components/common/goodsSpec.vue'),
            }
     
        ]
      },
      // 订单管理
      {
        path: '/order',
        name: 'order',
        meta: {
          requireAuth: true,
        },
        component: () => import('../ord/order.vue'),
        redirect: '/orderItem',
        children: [
          
          {
              path: '/orderItem',
              name: 'orderItem',
              meta: {
                requireAuth: true
              },
              query:{
                  type:'wait'
              },
              component: () => import('../ord/index.vue'),
            },
          {
            path: '/detail',
            name: 'detail',
            meta: {
                requireAuth: true
            },
            component: () => import('../ord/detail.vue'),
          },
        ]
      },
      // 用户管理
      {
        path: '/user',
        name: 'user',
        meta: {
          requireAuth: true,
        },
        component: () => import('../user/user.vue'),
        redirect: '/admin',
        children: [{
            path: '/admin',
            name: 'admin',
            meta: {
                requireAuth: true
            },
            component: () => import('../user/children/admin.vue'),
          },
          {
            path: '/powerManager',
            name: 'powerManager',
            meta: {
                requireAuth: true
            },
            component: () => import('../user/children/powerManager.vue'),
          },
          {
            path: '/roleManager',
            name: 'roleManager',
            meta: {
                requireAuth: true
            },
            component: () => import('../user/children/roleManager.vue'),
          },
        ]
      },
      // 商铺管理
      {
        path: '/store',
        name: 'store',
        meta: {
            requireAuth: true
        },
        component: () => import('../store/store.vue'),
      },
      // 小程序
      {
        path: '/wxapp',
        name: 'wxapp',
        meta: {
            requireAuth: true
        },
        component: () => import('../wxapp/wxapp.vue'),
        redirect: '/wxappSetting',
        children: [{
            path: '/wxappSetting',
            name: 'wxappSetting',
            meta: {
                requireAuth: true
            },
            component: () => import('../wxapp/children/wxappSetting.vue'),
          },
          {
            path: '/wxappPageDesign',
            name: 'wxappPageDesign',
            meta: {
                requireAuth: true
            },
            component: () => import('../wxapp/children/wxappPageDesign.vue'),
          },
          {
            path: '/addPage',
            name: 'addPage',
            meta: {
              requireAuth: true,
            },
            component: () => import('../wxapp/add/addPage.vue'),
          },
          {
            path: '/wxappPageModule',
            name: 'wxappPageModule',
            meta: {
              requireAuth: true,
            },
            component: () => import('../wxapp/children/wxappPageModule.vue'),
          },
          {
            path: '/wxappPageLink',
            name: 'wxappPageLink',
            meta: {
              requireAuth: true,
            },
            component: () => import('../wxapp/children/wxappPageLink.vue'),
          },
          {
            path: '/wxappHelp',
            name: 'wxappHelp',
            meta: {
              requireAuth: true,
            },
            component: () => import('../wxapp/children/wxappHelp.vue'),
          },
        ]
      },
      // 设置
      {
        path: '/setting',
        name: 'setting',
        meta: {
            requireAuth: true
        },
        component: () => import('../setting/setting.vue'),
        redirect: '/storeSetting',
        children: [{
            path: '/storeSetting',
            name: 'storeSetting',
            meta: {
                requireAuth: true
            },
            component: () => import('../setting/children/storeSetting.vue'),
          },
          {
            path: '/paySetting',
            name: 'paySetting',
            meta: {
                requireAuth: true
            },
            component: () => import('../setting/children/paySetting.vue'),
          },
          {
            path: '/sendSetting',
            name: 'sendSetting',
            meta: {
                requireAuth: true
            },
            component: () => import('../setting/children/sendSetting.vue'),
  
          },
          {
            path: '/addSend',
            name: 'addSend',
            meta: {
                requireAuth: true
            },
            component: () => import('../setting/add/addSend.vue'),
  
          },
          {
            path: '/editSend',
            name: 'editSend',
            meta: {
                requireAuth: true
            },
            component: () => import('../setting/edit/editSend.vue'),
  
          },
          {
            path: '/inforSetting',
            name: 'inforSetting',
            meta: {
                requireAuth: true
            },
            component: () => import('../setting/children/inforSetting.vue'),
          },
          {
            path: '/upSetting',
            name: 'upSetting',
            meta: {
                requireAuth: true
            },
            component: () => import('../setting/children/upSetting.vue'),
          },
        ]
      }
    ]
  }
  