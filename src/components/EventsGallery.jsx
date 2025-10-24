import React, { useState, useEffect, useCallback } from 'react';

// Animation styles remain the same
const animationStyles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
.animate-slide-up {
  animation: slideUp 0.4s ease-out forwards;
}
`;

// Data structure with 6 albums, each with 4 photos
const albums = [
    {
        title: "Ace 2.O NIMINS",
        coverSrc: "/assets/ace event 1.jpg",
        images: [
            {src: "/assets/ace event 2.jpg", title: "Interactive Workshop", description: "Workshop in NIMINS Mumbai ."},
            {src: "/assets/ace event 3.jpg", title: "Leadership Training", description: "An interactive session focused on developing leadership and soft skills."},
            {src: "/assets/ace event 5.jpg ", title: "Project Planning", description: "A team of students brainstorming and planning their project on a whiteboard."},
            {src: "/assets/ace event 6.jpg", title: "Late Night Coding", description: "Dedicated students working hard to meet their project deadlines."},
        ]
    },
    {
        title: "DEET Telangana",
        coverSrc: "/assets/deet 2.JPG",
        images: [
            {src: "/assets/deet 1.JPG", title: "DEET Hiring", description: "Conducted hiring for Kibotech using DEET Platform."},
            {src: "/assets/deet 4.JPG", title: "Speech from Tech Lead", description: "Telling about Exposure in Tech"},
            {src: "/assets/deet 5.JPG", title: "Gather", description: "How is the Process looks like."},
            {src: "/assets/deet 6.JPG", title: "Students Interaction", description: "Students Interaction with the Mentors"},
        ]
    },
    {
        title: "Emerging Business Analytics ",
        coverSrc: "/assets/avinesh event 2.jpg",
        images: [
            {src: "/assets/avinesh event 1.jpg", title: "Expert Industry Talk", description: "An engaging session with a guest speaker from a leading tech company."},
             {src: "/assets/avinesh event 3.jpg", title: "Audience Q&A", description: "Students asking insightful questions during the Q&A session."},
            //  {src: "/assets/avinesh event 4.png", title: "Keynote Speaker", description: "The keynote speaker delivering a powerful and inspiring message."},
            //  {src: "/assets/avinesh event 5.png", title: "Panel Discussion", description: "A lively panel discussion with experts from various fields."},
        ]
    },
    {
        title: "The 4i Seminar",
        coverSrc: "/assets/k inaugration 1.jpg",
        images: [
            {src: "/assets/k inaugration 2.jpg", title: "Inaugration By KiboTech", description: "Students will be learning from the Tech leaders."},
            {src: "/assets/k inaugration 3.jpg", title: "Speech by Anand Mittal", description: "He is a CHRO for the Sreenidhi colleges"},
            {src: "/assets/k inaugration 4.jpg", title: "Group Photo", description: "A Great experiance for the students."},
            // {src: "/assets/k inaugration 6.jpg", title: "Poster Presentations", description: "Showcasing project details through a poster presentation."},
        ]
    },
    {
        title:"the St pauls degree and college",
        coverSrc:"/assets/st pauls 4.jpg",
        images:[
            {src: "/assets/st pauls 1.png", title: "Code. Create. Innovate — The Ultimate College Tech Event", description: "Dive into the world of technology and coding with hands-on sessions, fun competitions, and a chance to showcase your tech talent!."},
            {src: "/assets/st pauls 2.png", title: "Hack the Future: A Celebration of Code & Creativity", description: "Experience the thrill of coding, innovation, and collaboration as you build, compete, and create the future of technology!."},
            {src: "/assets/st pauls 3.png", title: "TechSpark: Fueling Innovation", description: "Unlock your potential in the digital world with engaging sessions, creative problem-solving, and hands-on coding fun!."},
            {src: "/assets/st pauls.png", title: "ByteFest: The Ultimate Tech", description: "Immerse yourself in tech-driven excitement — from live coding to innovative challenges that spark your imagination!."},
        ]
    },
    {
        title:"The Press Confrence",
        coverSrc:"/assets/press confrence 1.jpg",
        images:[
            {src: "/assets/press confrence 2.jpg", title: "TechPress 2025: Inspiring Innovation, Empowering Ideas", description: "successfully hosted a dynamic press conference highlighting upcoming tech initiatives, coding events, and innovation-driven projects.."},
            {src: "/assets/press confrence 3.jpg", title: "Unveiling the Future of Technology — Press Conference Highlights", description: "A vibrant press meet showcased the vision of nurturing young tech talent and fostering a culture of innovation and digital growth.."},
            {src: "/assets/press confrence 4.jpg", title: "Campus Press Meet Marks the Beginning of a New Tech Era", description: "The event brought together faculty, students, and media to discuss the college’s latest advancements in technology and coding programs.."},
            {src: "/assets/press confrence 6.jpg", title: "Tech Leaders and Innovators Gather for an Insightful Press Conference", description: "With enthusiasm and insight, the press meet highlighted how the college is paving the way for the next generation of tech leaders.."},
        ]
    },

    {
        title: "The Upcoming Events ",
        coverSrc: "/assets/cyber s 1.jpg",
        images: [
            {src: "/assets/cyber s 1.jpg", title: "the cyber summit", description: "The whole new event start from 29 oct 2025."},
]
    }
];

const EventsGallery = () => {
    const [activeAlbumIndex, setActiveAlbumIndex] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false); // State to pause slideshow on hover

    const openModal = (albumIndex) => {
        setActiveAlbumIndex(albumIndex);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setActiveAlbumIndex(null);
    };

    const showNextImage = useCallback((e) => {
        if (e) e.stopPropagation();
        if (activeAlbumIndex === null) return;
        const album = albums[activeAlbumIndex];
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % album.images.length);
    }, [activeAlbumIndex]);

    const showPrevImage = useCallback((e) => {
        if (e) e.stopPropagation();
        if (activeAlbumIndex === null) return;
        const album = albums[activeAlbumIndex];
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + album.images.length) % album.images.length);
    }, [activeAlbumIndex]);

    // Effect for automatic slideshow
    useEffect(() => {
        if (activeAlbumIndex !== null && !isPaused) {
            const timer = setInterval(() => {
                showNextImage();
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(timer);
        }
    }, [activeAlbumIndex, currentImageIndex, isPaused, showNextImage]);

    // Effect for keyboard controls
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') closeModal();
            else if (event.key === 'ArrowRight') showNextImage();
            else if (event.key === 'ArrowLeft') showPrevImage();
        };

        if (activeAlbumIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeAlbumIndex, showNextImage, showPrevImage]);

    const modalContent = activeAlbumIndex !== null ? albums[activeAlbumIndex].images[currentImageIndex] : null;

    return (
        <>
            <style>{animationStyles}</style>
            <section id="events" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Events in Action</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Glimpses from our career-focused workshops, hackathons, and mentorship sessions.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {albums.map((album, index) => (
                            <div 
                                key={index} 
                                className="group relative overflow-hidden rounded-xl cursor-pointer h-72"
                                onClick={() => openModal(index)}
                            >
                                <img src={album.coverSrc} alt={album.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h3 className="text-white text-xl font-bold">{album.title}</h3>
                                    <p className="text-white/80 text-sm">View Gallery</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {modalContent && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 animate-fade-in" 
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div 
                        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden animate-slide-up" 
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <button 
                            onClick={showPrevImage} 
                            className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-white/70 text-black rounded-full h-10 w-10 flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors z-20"
                            aria-label="Previous image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>

                        <img src={modalContent.src} alt={modalContent.title} className="w-full md:w-2/3 object-cover max-h-[80vh]" />
                        <div className="p-6 flex flex-col justify-center">
                            <h3 id="modal-title" className="text-2xl font-bold text-gray-800 mb-2">{modalContent.title}</h3>
                            <p className="text-gray-600">{modalContent.description}</p>
                        </div>
                        
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 bg-white/80 text-black rounded-full h-10 w-10 flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors z-20"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <button 
                            onClick={showNextImage} 
                            className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-white/70 text-black rounded-full h-10 w-10 flex items-center justify-center backdrop-blur-sm hover:bg-white transition-colors z-20"
                            aria-label="Next image"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default EventsGallery;

