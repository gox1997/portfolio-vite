const ProjectItem = ({ img, title, description }) => {
    return (
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
            {/* Background Image with Overlay */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-white text-sm mb-4">{description}</p>

                {/* Tech Stack */}
                <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs border border-blue-400/30">
                        React
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs border border-purple-400/30">
                        Tailwind
                    </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-3 px-4 text-sm font-medium hover:bg-white/20 transition-all duration-300 transform group-hover:scale-105">
                    View Project →
                </button>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
};

export default ProjectItem;
