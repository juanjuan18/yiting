import fetch from '../util/fetch'

export function position(data){
    return fetch({
        method:"POST",
        url:"/home/position",
        data:data
    })
}
export function order(data){
    return fetch({
        method:"POST",
        url:"/home/order",
        data:data
    })
}
export function parkinglots(data){
    return fetch({
        method:"POST",
        url:"/home/park",
        data:data
    })
}
export function wallet(data){
    return fetch({
        method:"POST",
        url:"/wallet",
        data:data
    })
}
export function ezStop(data){
    return fetch({
        method:"POST",
        url:"/ezStop",
        data:data
    });
}
export function login(data){
    return fetch({
        method:"POST",
        url:"/login",
        data:data
    })
}

export function regist(data){
    return fetch({
        method:"POST",
        url:"/regist",
        data:data
    })
}