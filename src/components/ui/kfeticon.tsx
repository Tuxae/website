export default function KfetIcon() {
    return (
        <div className="group relative w-10 h-10 flex items-center justify-center cursor-pointer">
            {/* Diagonal lines forming X */}
            <svg className="absolute inset-0 w-10 h-10 animate-rotate group-hover:scale-105 all-500" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                {/* Top-left to bottom-right line */}
                <line x1="20" y1="20" x2="236" y2="236" className="stroke-black stroke-3 group-hover:stroke-2 all-500"/>
                {/* Top-right to bottom-left line */}
                <line x1="236" y1="20" x2="20" y2="236" className="stroke-black stroke-3 group-hover:stroke-2 all-500" />
            </svg>

            {/* Letters positioned around the X */}
            <div className="absolute -top-1 left-1/2 -translate-x-2/3">
                <span className="text-sm text-kfet-red hover:text-kfet-yellow all-500">K</span>
            </div>

            <div className="absolute -left-0 top-1/2 -translate-y-1/2">
                <span className="text-sm text-kfet-red hover:text-kfet-yellow all-500">F</span>
            </div>

            <div className="absolute -right-0 top-1/2 -translate-y-1/2">
                <span className="text-sm">T</span>
            </div>

            <div className="absolute -bottom-1 left-1/2 -translate-x-2/3">
                <span className="text-sm inline-block scale-x-[-1]">&</span>
            </div>
        </div>
    )
}
