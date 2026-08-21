import { Injectable } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";

interface TenantContext { 
    tenantId: number; 
}

@Injectable()
export class TenantContextService {
    private readonly storage  = new AsyncLocalStorage<TenantContext>(); 

    run<T>(tenantId: Number, callback:()=> T): T{
        return this.storage.run(
            {tenantId},
            callback
        )
    }

    getTenantId() : number {
        const context = this.storage.getStore()

        if(!context){
            throw new Error("Tenant not found "); 
        }

        return context.tenantId
    }
}