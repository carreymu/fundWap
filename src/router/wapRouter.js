import Vue from 'vue'
import VueRouter from 'vue-router'
import fundWap from '@/components/fundWap'
import targetIndex from '@/components/wap/target/targetIndex'
import targetDetail from '@/components/wap/target/targetDetail'
import targetFundDetail from '@/components/wap/target/targetFundDetail'
import targetList from '@/components/wap/target/targetList'
import targetNews from '@/components/wap/target/targetNews'
import targetOrder from '@/components/wap/target/targetOrder'
import drumstick from '@/components/wap/drumstick/drumstick'
import bestChoice from '@/components/wap/bestChoice/bestChoice'
import bestChoiceDetail from '@/components/wap/bestChoice/bestChoiceDetail'
import systemInfoDetail from '@/components/wap/systemInfo/systemInfoDetail'
import mine from '@/components/wap/mine/mine'
import mineCards from '@/components/wap/mine/mineCards'

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
					path: '/fundWap/targetFundDetail/:tid',
					name: 'targetFundDetail',
					component: targetFundDetail
				},
				{
					path: '/fundWap/targetList',
					name: 'targetList',
					component: targetList
				},
				{
					path: '/fundWap/targetNews',
					name: 'targetNews',
					component: targetNews
				},
				{
					path: '/fundWap/targetOrder/:tid',
					name: 'targetOrder',
					component: targetOrder
				},
			    {
			      path: '/fundWap/drumstick',
			      name: 'drumstick',
			      component: drumstick
			    },
			    {
			      path: '/fundWap/mineCards',
			      name: 'mineCards',
			      component: mineCards
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
			      path: '/fundWap/bestChoiceDetail/:choiceId',
			      name: 'bestChoiceDetail',
			      component: bestChoiceDetail
			    },
			    {
			      path: '/fundWap/systemInfoDetail/:sysId',
			      name: 'systemInfoDetail',
			      component: systemInfoDetail
			    }
	       ]
	    },
	     
    ]
});

export default router;