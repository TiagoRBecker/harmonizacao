const SiteMap = () => {
     const date = new Date()
     const dateFormated = date.toLocaleString('pt-br')
    return [
        {
            url:"https://advogadosharmonizacao.vercel.app/",
            lastModified:new Date()
        },
        {
            url:"https://advogadosharmonizacao.vercel.app/categories",
            lastModified:new Date()
        },
        {
            url:"https://advogadosharmonizacao.vercel.app/courses",
            lastModified:new Date()
        },
        {
            url:"https://advogadosharmonizacao.vercel.app/consultancy",
            lastModified:new Date()
        },
        {
            url:"https://advogadosharmonizacao.vercel.app/contact",
            lastModified:new Date()
        }
    ]

      
}
 
export default SiteMap;