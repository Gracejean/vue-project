var routes = [
    {
        path: "/",
        redirect: {
            name: "Home",
        },
        meta: {
            user: true
        }
    },
    {
        path: "/user/home",
        name: "Home",
        component: ()=>import("@/user/views/Home.vue"),
        meta: {
            user: true
        }
    },
    {
        path: "/user/get/business-clearance",
        name: "business-clearance",
        component: ()=>import("@/user/views/BusinessClearance.vue"),
        meta: {
            user: true
        }
    },
    {
        path: "/user/get/barangay-clearance",
        name: "barangay-clearance",
        component: ()=>import("@/user/views/BarangayClearance.vue"),
        meta: {
            user: true
        }
    },
    {
        path: "/user/get/barangay-indigency",
        name: "barangay-indigency",
        component: ()=>import("@/user/views/BarangayIndigency.vue"),
        meta: {
            user: true
        }
    }
]
let userRoutes = ()=>{
    return routes
}


export { userRoutes };