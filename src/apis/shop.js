import httpInstanceTest from "@/utils/httpTest";

export const getShopInfoAPI = (id) =>{
    return httpInstanceTest({
        url: `/shop/q/${id}`,
        method: 'GET'
    })
}

export const getShopMenuAPI = (id) =>{
    return httpInstanceTest({
        // url: `/menu/s/${id}`,
        url: "/menu/s/1",
        method: 'GET'
    })
}