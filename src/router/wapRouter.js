import Vue from 'vue'
import VueRouter from 'vue-router'
import fundWap from '@/components/fundWap'
import targetIndex from '@/components/wap/target/targetIndex'
import targetDetail from '@/components/wap/target/targetDetail'
import targetList from '@/components/wap/target/targetList'
import targetNews from '@/components/wap/target/targetNews'
import drumstick from '@/components/wap/drumstick/drumstick'
import bestChoice from '@/components/wap/bestChoice/bestChoice'
import bestChoiceDetail from '@/components/wap/bestChoice/bestChoiceDetail'
import systemInfoDetail from '@/components/wap/systemInfo/systemInfoDetail'
import mine from '@/components/wap/mine/mine'

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
			      path: '/fundWap/drumstick',
			      name: 'drumstick',
			      component: drumstick
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