
const modules = import.meta.globEager('./home/*.tsx')
export default  Object.values(modules).map((item:any)=>item.default).sort((a,b)=>a.sort-b.sort)
