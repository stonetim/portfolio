import tagIcons from '../data/tagIcons';

function ProjectCard({ project, onClick }) {
    const { title, image, tags } = project;

    return (
        <button
            onClick={onClick}
            className="group w-full text-left bg-soft-black rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        >
            <div className="aspect-video overflow-hidden">
                {image ? (
                    <img 
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                        <span className="text-neutral-500 text-sm uppercase tracking-widest">No image available</span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-off-white font-bold text-lg mb-3">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => {
                        const Icon = tagIcons[tag];

                        return Icon ? (
                            <Icon key={tag} className="text-neutral-400 text-xl" title={tag} />
                        ) : (
                            <span key={tag} className="text-neutral-400 text-sm uppercase tracking-wide">
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </button>
    )
}

export default ProjectCard;
