
export default function ItemInfo({gradient = 'from-[#474554] to-[#474554]', title = "title", subtitle="subtitle", description="description"}) {
  return (
    <div className={`relative bg-gradient-to-r rounded px-3 py-2 group ${gradient}`}>
        <div className="absolute bg-special-black top-[0.15rem] left-2 w-[calc(100%-0.65rem)] h-[calc(100%-0.3rem)] rounded -z-0 transition-all"></div>
        <div className="flex flex-col gap-1 !z-[999] relative pl-2">
            <span className="text-[#A3A3A3] text-base font-bold">{title}</span>
            <span className="font-bold">{subtitle}</span>
            <span className="text-[#A3A3A3] text-base">{description}</span>
        </div>
    </div>
  )
}
