

export const api = {
    async getDocs(id:string){
     const request = await fetch(`/api/contracts/${id}`,{
        method:"GET",
        cache:"no-cache"
     })
     const response = await request.json()
     return response
    },
    async getCat(){
        const request  = await fetch("/api/categories", {
            method:"GET",
            cache:"no-cache"
        })
        const response = await request.json()
        return response
    },
    async getSearch(search:string){
        const request  = await fetch(`/api/search?search=${search}`, {
            method:"GET"
        })
         const response = await request.json()
         return response
    }
    
     

}
