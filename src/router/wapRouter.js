import Vue from 'vue'
import VueRouter from 'vue-router'
import fundWap from '@/components/fundWap'
import targetIndex from '@/components/wap/target/targetIndex'
import targetDetail from '@/components/wap/target/targetDetail'
import targetFundDetail from '@/components/wap/target/targetFundDetail'
import targetList from '@/components/wap/target/targetList'
import targetNews from '@/components/wap/target/targetNews'
import targetOrder from '@/components/wap/target/targetOrder'
import targetFOrder from '@/components/wap/target/targetFOrder'
import targetSOrder from '@/components/wap/target/targetSOrder'
import targetFundOrder from '@/components/wap/target/targetFundOrder'
import targetStockOrder from '@/components/wap/target/targetStockOrder'
import targetTemplate from '@/components/wap/target/targetTemplate'
import drumstick from '@/components/wap/drumstick/drumstick'
import bestChoice from '@/components/wap/bestChoice/bestChoice'
import bestChoiceDetail from '@/components/wap/bestChoice/bestChoiceDetail'
import bestChoiceSingle from '@/components/wap/bestChoice/bestChoiceSingle'
import systemInfoDetail from '@/components/wap/systemInfo/systemInfoDetail'
import systemInfo from '@/components/wap/systemInfo/systemInfo'
import mine from '@/components/wap/mine/mine'
import myCards from '@/components/wap/mine/myCards'
import myNews from '@/components/wap/mine/myNews'
import myPositions from '@/components/wap/mine/myPositions'
import myTargets from '@/components/wap/mine/myTargets'
import myAccount from '@/components/wap/mine//myAccount'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    //路由映射map
    routes: [
        { path: '/', redirect: '/fundWap/targetIndex' },
        { path: '*', redirect: '/fundWap/targetIndex' },
	    {
	      path: '/fundWap',
	      name: 'fundWap',
	      component: fundWap,
	      children:[
			{
				path: '/fundWap/targetIndex',
				name: 'targetIndex',
				component: targetIndex
			},
			{
				path: '/fundWap/targetDetail/:targetId',
				name: 'targetDetail',
				component: targetDetail
			},
			{
				path: '/fundWap/targetFundDetail/:ft_id',
				name: 'targetFundDetail',
				component: targetFundDetail
			},
			{
				path: '/fundWap/targetList',
				name: 'targetList',
				component: targetList
			},
			{
				path: '/fundWap/targetNews/:ncid',
				name: 'targetNews',
				component: targetNews
			},
			{
				path: '/fundWap/targetOrder',
				name: 'targetOrder',
				component: targetOrder
			},
			{
				path: '/fundWap/targetFOrder/',
				name: 'targetFOrder',
				component: targetFOrder
			},
			{
				path: '/fundWap/targetFundOrder/:fid',
				name: 'targetFundOrder',
				component: targetFundOrder
			},
			{
				path: '/fundWap/targetSOrder/',
				name: 'targetSOrder',
				component: targetSOrder
			},
			{
				path: '/fundWap/targetStockOrder/:fid',
				name: 'targetStockOrder',
				component: targetStockOrder
			},
			{
				path: '/fundWap/targetTemplate/:iv_id',
				name: 'targetTemplate',
				component: targetTemplate
			},
			{
				path: '/fundWap/drumstick',
				name: 'drumstick',
				component: drumstick
			},
			{
				path: '/fundWap/myCards',
				name: 'myCards',
				component: myCards
			},
			{
				path: '/fundWap/myNews',
				name: 'myNews',
				component: myNews
			},
			{
				path: '/fundWap/myPositions',
				name: 'myPositions',
				component: myPositions
			},
			{
				path: '/fundWap/myTargets',
				name: 'myTargets',
				component: myTargets
			},
			{
				path: '/fundWap/myAccount',
				name: 'myAccount',
				component: myAccount
			},
			{
				path: '/fundWap/mine',
				name: 'mine',
				component: mine
				},
			{
				path: '/fundWap/bestChoice',
				name: 'bestChoice',
				component: bestChoice
			},
			{
				path: '/fundWap/bestChoiceDetail/:cid',
				name: 'bestChoiceDetail',
				component: bestChoiceDetail
			},
			{
				path: '/fundWap/bestChoiceSingle/:cid',
				name: 'bestChoiceSingle',
				component: bestChoiceSingle
			},
			{
				path: '/fundWap/systemInfoDetail',
				name: 'systemInfoDetail',
				component: systemInfoDetail
			},
			{
				path: '/fundWap/systemInfo',
				name: 'systemInfo',
				component: systemInfo
			}
	       ]
	    },
	     
    ]
});

export default router;