import { createWebHistory,createRouter } from "vue-router";
import Home from '@/components/ComHome.vue'
import ThucDon from '@/components/ComThucDon.vue'
import GioiThieu from '@/components/ComGioiTh.vue'
import LienHe from '@/components/ComLienHe.vue'
import TinTuc from '@/components/ComTinTuc.vue'
// tạo mảng chứa những đường link
const routes=[
    // đối tượng trang chủ
    {
        path:"/",
        name:"Home",
        component:Home
    },
    // đường link ko phải là trang chủ path:"/ten"
    {
        path:"/thucdon",
        name:"ThucDon",
        component:ThucDon
    },
    {
        path:"/gioithieu",
        name:"GioiThieu",
        component:GioiThieu
    },
    {
        path:"/lienhe",
        name:"LienHe",
        component:LienHe
    },
    {
        path:"/tintuc",
        name:"TinTuc",
        component:TinTuc
    },
]
// tạo đối tượng router
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router