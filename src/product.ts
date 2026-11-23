export interface Product{
    readonly id: string,
    name: string,
    description?: string,
    price: number,
    stock: number,
    createdAt: Date,
    updatedAt: Date,
}


export interface CreateProductInput{
    name:string,
    description?:string,
    price:number,
    stock: number,
}

export function validateCreateProductInput(input:unknown):{
    isValid:boolean;
    errors:string[]}{
        const errors: string[]=[];
    if(!input || typeof input!== 'object'){

        return{isValid:false,errors:['Input Must be a valid json obj']}
    }

    const body = input as Record<string, unknown>

    if(typeof body.name!=='string'|| body.name.trim().length===0){
        errors.push('Productname must be string and cant be empty')
    }

    if(body.description !== undefined && typeof body.description!=='string'){
        errors.push('Description must be string')
    }

    if(typeof body.price!=='number' ||!Number.isInteger(body.price)|| body.price<1){
        errors.push('Price should be number and positive')
    }

    if(typeof body.stock!=="number" || body.stock<0){
        errors.push('Stock must be number and positive')
    }

    return{
        isValid:errors.length===0,
        errors
    }
}