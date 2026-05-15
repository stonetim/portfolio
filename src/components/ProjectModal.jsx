import { useEffect } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import tagIcons from '../data/tagIcons';

function ProjectModal({project, onClose}) {
    const { title, description, image, fullImage, siteUrl, codeUrl, tags } = project;
    const displayImage = fullImage || image;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') onClose();
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-solid-black/80"
            onClick={onClose}
        >
            <div 
                className="relative bg-soft-black rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" 
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-off-white hover:text-red transition-colors cursor-pointer"
                    aria-label="Close modal"
                >
                    <FiX className="text-2xl" />
                </button>

                {displayImage && (
                    <div className="w-full">
                        <img
                            src={displayImage}
                            alt={title}
                            className="w-full object-cover rounded-t-lg"
                        />
                    </div>
                )}

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-off-white mb-3">{title}</h2>
                    <p className="text-neutral-400 mb-6 leading-relaxed">{description}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                        {tags.map(tag => {
                            const Icon = tagIcons[tag];

                            return Icon ? (
                                <div key={tag} className="flex items-center gap-1.5 text-neutral-400">
                                    <Icon className="text-lg" />
                                    <span className="text-xs uppercase tracking-wide">{tag}</span>
                                </div>
                            ) : (
                                <span key={tag} className="text-neutral-400 text-xs uppercase tracking-wide">{tag}</span>
                            );
                        })}
                    </div>
                    <div className="flex gap-4">
                        {siteUrl && (
                            <a
                                href={siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-red text-off-white text-sm uppercase tracking-widest hover:bg-red/80 transition-colors rounded"
                            >
                                <FiExternalLink />
                                See Site
                            </a>
                        )}
                        {codeUrl && (
                            <a
                                href={codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-off-white/20 text-off-white text-sm uppercase tracking-widest hover:border-red hover:text-red transition-colors rounded"
                            >
                                <FiGithub />
                                See Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
