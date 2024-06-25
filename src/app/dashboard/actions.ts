"use server"
import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

export const changeOrderStatus = async ({
    id,
    newStatus
}:{
    id:string,
    newStatus: OrderStatus

})=>{
    console.log("running server")
    await db.order.update({
        where:{id},
        data:{status:newStatus},
    })
}