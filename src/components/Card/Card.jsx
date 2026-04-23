export const Card = ({item}) => {
    return (
        <div className="border-4 border-black p-4 bg-white flex flex-col items-center hover:bg-gray-50 transition-colors"> 
           
            <span className="bg-black text-white px-2 py-1 self-start text-xs font-bold mb-4 uppercase tracking-widest">
                {item.type}
            </span>

            <div className="w-full h-40 bg-gray-100 border-dasher border-gray-4 flex items-center justify-center mb-4 overflow-hidden">
                {item.image ? (
                    <img src={item.image} alt={item.name} className="object-contain w-full h-full"/>
                ) : (
                    <span className="text-gray-400 font-bold text-sm">IMG NULL</span>
                )}
            </div>

            <h3 className="font-bold text-xl uppercase text-center">{item.name}</h3>

            <div className="mt-2 text-sm texto-gray-600 flex gap-2">
                {item.behavior && <span className="bg-gray-200 px-2 py-1 rounded"> {item.behavior}</span>}
                {item.size && <span className="bg-gray-200 px-2 py-1 rounded"> {item.size}</span>}
            </div>
        </div>
    )
}