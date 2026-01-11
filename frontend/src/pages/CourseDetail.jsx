import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play,
    Lock,
    CheckCircle,
    Smartphone,
    Award,
    Globe,
    Clock,
    Star,
    Users,
    Calendar,
    ChevronDown,
    ChevronUp,
    MessageCircle,
    Share2,
    Heart
} from 'lucide-react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('overview');
    const [openSection, setOpenSection] = useState(0);

    // Mock Data - In a real app, fetch/find based on ID
    const course = {
        title: 'Complete Web Development Bootcamp',
        description: 'Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!',
        instructor: {
            name: 'Dr. Angela Yu',
            title: 'Lead Instructor at App Brewery',
            rating: 4.8,
            reviews: '810,232',
            students: '2,500,000',
            courses: 12,
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Angela',
            bio: "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer."
        },
        rating: 4.7,
        numRatings: 3456,
        students: 12500,
        lastUpdated: '01/2026',
        language: 'English',
        price: '₹3,499',
        originalPrice: '₹12,999',
        discount: '73% OFF',
        features: [
            '60 hours on-demand video',
            '80 coding exercises',
            'Full lifetime access',
            'Access on mobile and TV',
            'Certificate of completion'
        ],
        curriculum: [
            {
                section: 'Introduction to Web Development',
                duration: '45m',
                lectures: [
                    { title: 'How does the internet work?', duration: '05:20', isFree: true },
                    { title: 'Installing VS Code', duration: '08:15', isFree: true },
                    { title: 'Introduction to Web Dev', duration: '12:30', isFree: false },
                ]
            },
            {
                section: 'HTML 5 - Structuring the Web',
                duration: '2h 15m',
                lectures: [
                    { title: 'HTML Boilerplate', duration: '12:10', isFree: false },
                    { title: 'HTML Lists', duration: '08:45', isFree: false },
                    { title: 'HTML Forms', duration: '15:30', isFree: false },
                    { title: 'The Div Element', duration: '10:00', isFree: false },
                ]
            },
            {
                section: 'CSS 3 - Styling the Web',
                duration: '3h 30m',
                lectures: [
                    { title: 'CSS Selectors', duration: '18:00', isFree: false },
                    { title: 'Flexbox Layout', duration: '25:10', isFree: false },
                    { title: 'CSS Grid', duration: '30:00', isFree: false },
                ]
            }
        ],
        reviews: [
            {
                user: 'Sarah M.',
                rating: 5,
                date: '2 weeks ago',
                comment: 'This course is absolutely amazing. The instructor explains everything so clearly. I went from knowing nothing to building full-stack apps!',
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
            },
            {
                user: 'Michael R.',
                rating: 5,
                date: '1 month ago',
                comment: 'Best investment I ever made. The React section alone is worth the price.',
                image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
            }
        ]
    };

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? -1 : index);
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 pb-20">
            {/* Background Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/30 rounded-full blur-[120px]" />
            </div>

            {/* Navbar Placeholder (Back button) */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                <a href="/courses" className="text-gray-600 hover:text-indigo-600 font-medium flex items-center gap-2 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
                    Back to Courses
                </a>
                <div className="flex gap-4">
                    <button className="p-2 text-gray-500 hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></button>
                    <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"><Share2 className="w-5 h-5" /></button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative z-10">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-12">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center space-x-2 text-sm font-bold tracking-wide text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full w-fit">
                            <span>Web Development</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                                <span className="font-bold text-yellow-600 mr-1">{course.rating}</span>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-500">({course.numRatings.toLocaleString()})</span>
                            </div>
                            <span className="flex items-center gap-1"><Users className="w-4 h-4 text-indigo-500" /> {course.students.toLocaleString()} students</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-indigo-500" /> Last updated {course.lastUpdated}</span>
                            <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-indigo-500" /> {course.language}</span>
                        </div>

                        <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur rounded-2xl border border-gray-100 w-fit">
                            <img
                                src={course.instructor.image}
                                alt={course.instructor.name}
                                className="w-12 h-12 rounded-full ring-2 ring-indigo-100"
                            />
                            <div>
                                <p className="text-sm text-gray-500">Created by</p>
                                <a href="#" className="font-bold text-indigo-600 hover:underline">{course.instructor.name}</a>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Video Preview Card (Top Right) */}
                    <div className="hidden lg:block w-[400px] flex-shrink-0">
                        {/* This spacer keeps layout structure, real card moves to sidebar on scroll via styling if wanted, 
                             or sticky container below. For now, simple layout adjacent to hero. */}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Column */}
                    <div className="flex-1">

                        {/* Mobile Video Preview (visible only on mobile) */}
                        <div className="block lg:hidden mb-8">
                            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all scale-100 group-hover:scale-110">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
                                    alt="Course Preview"
                                />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="sticky top-[72px] bg-[#f8fafc]/90 backdrop-blur z-20 pt-2">
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex space-x-8">
                                    {['Overview', 'Curriculum', 'Instructor', 'Reviews'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab.toLowerCase())}
                                            className={`
                                                whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm transition-all
                                                ${activeTab === tab.toLowerCase()
                                                    ? 'border-indigo-600 text-indigo-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                                            `}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="py-8 space-y-10 min-h-[500px]">
                            {activeTab === 'overview' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {['Build full-stack web applications', 'Master React.js and Node.js', 'Design database schemas', 'Deploy to production', 'Authentication & Security', 'Modern UI/UX Principles'].map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                                        <div className="prose prose-indigo text-gray-600 max-w-none">
                                            <p>This course is designed to take you from a complete beginner to a job-ready developer. You will learn by building real projects, not just watching videos. We cover the latest technologies including React 19, Node.js, and Modern CSS.</p>
                                            <p className="mt-4">Whether you want to change careers, build your own startup, or just learn to code, this Bootcamp is the only course you need.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'curriculum' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-gray-600 font-medium">{course.curriculum.length} sections • {course.curriculum.reduce((acc, curr) => acc + curr.lectures.length, 0)} lectures • {course.features[0]}</p>
                                        <button className="text-indigo-600 font-bold text-sm hover:underline">Expand all sections</button>
                                    </div>

                                    {course.curriculum.map((section, idx) => (
                                        <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                            <button
                                                onClick={() => toggleSection(idx)}
                                                className="w-full bg-gray-50/50 px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="flex items-center gap-4">
                                                    {openSection === idx ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                                                    <span className="font-bold text-gray-900 text-lg">{section.section}</span>
                                                </div>
                                                <span className="text-sm text-gray-500 font-medium">{section.lectures.length} lectures • {section.duration}</span>
                                            </button>

                                            <AnimatePresence>
                                                {openSection === idx && (
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        animate={{ height: 'auto' }}
                                                        exit={{ height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="divide-y divide-gray-100 border-t border-gray-100">
                                                            {section.lectures.map((lec, lIdx) => (
                                                                <div key={lIdx} className="px-6 py-4 flex items-center justify-between hover:bg-indigo-50/30 transition-colors cursor-pointer group">
                                                                    <div className="flex items-center gap-3">
                                                                        {lec.isFree ? (
                                                                            <Play className="h-4 w-4 text-indigo-500 fill-current" />
                                                                        ) : (
                                                                            <Lock className="h-4 w-4 text-gray-400" />
                                                                        )}
                                                                        <span className="text-gray-700 font-medium group-hover:text-indigo-600 transition-colors">{lec.title}</span>
                                                                        {lec.isFree && <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded">Preview</span>}
                                                                    </div>
                                                                    <span className="text-sm text-gray-400">{lec.duration}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'instructor' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Instructor</h3>
                                    <h4 className="text-xl text-indigo-600 font-bold underline mb-4">{course.instructor.name}</h4>
                                    <p className="text-gray-500 font-medium mb-6">{course.instructor.title}</p>

                                    <div className="flex items-start gap-6 mb-8">
                                        <img src={course.instructor.image} alt={course.instructor.name} className="w-24 h-24 rounded-full border-4 border-gray-100" />
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-gray-400" /> <span>{course.instructor.rating} Rating</span></div>
                                            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-gray-400" /> <span>{course.instructor.reviews} Reviews</span></div>
                                            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-gray-400" /> <span>{course.instructor.students} Students</span></div>
                                            <div className="flex items-center gap-2"><Play className="w-4 h-4 text-gray-400" /> <span>{course.instructor.courses} Courses</span></div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed">{course.instructor.bio}</p>
                                </motion.div>
                            )}

                            {activeTab === 'reviews' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900">Student Feedback</h3>

                                    <div className="flex items-center gap-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
                                        <div className="text-center">
                                            <div className="text-5xl font-extrabold text-gray-900">{course.rating}</div>
                                            <div className="flex text-yellow-400 justify-center my-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-current" />
                                                ))}
                                            </div>
                                            <div className="text-sm text-gray-500 font-bold">Course Rating</div>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-3">
                                                    <div className="h-2 flex-1 bg-gray-100 rounded-full overflow-hidden">
                                                        <div style={{ width: stars === 5 ? '70%' : stars === 4 ? '20%' : '5%' }} className="h-full bg-gray-400 rounded-full"></div>
                                                    </div>
                                                    <div className="flex text-yellow-400 w-24">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`w-3 h-3 ${i < stars ? 'fill-current' : 'text-gray-200'}`} />
                                                        ))}
                                                    </div>
                                                    <span className="text-xs text-indigo-600 font-bold w-8">{stars === 5 ? '70%' : stars === 4 ? '20%' : '5%'}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {course.reviews.map((review, i) => (
                                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <img src={review.image} alt={review.user} className="w-10 h-10 rounded-full" />
                                                        <div>
                                                            <div className="font-bold text-gray-900">{review.user}</div>
                                                            <div className="flex text-yellow-400 text-xs">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star key={i} className="w-3 h-3 fill-current" />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="text-xs text-gray-400 font-medium">{review.date}</span>
                                                </div>
                                                <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Sticky Sidebar (Right) */}
                    <div className="lg:w-[400px] relative">
                        {/* We pull this wrapper up into the hero area visually on desktop using negative margin or absolute positioning 
                             to overlap hero, but for simplicity in this grid layout, we'll keep it standard sticky. 
                             To replicate the 'udemy' style where card floats over hero, we'd need a different overall layout container.
                             Here we'll make it a distinctive premium card. */}

                        <div className="sticky top-24 space-y-6">
                            {/* Video Preview (Desktop sticky position alternative) */}
                            <div className="hidden lg:block aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer ring-4 ring-white">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all scale-100 group-hover:scale-110">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    alt="Course Preview"
                                />
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-white text-xs font-bold">Preview this course</div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
                                <div className="flex items-end mb-6">
                                    <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{course.price}</span>
                                    <span className="text-gray-400 line-through ml-3 mb-1.5 font-medium">{course.originalPrice}</span>
                                    <span className="ml-auto text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg font-bold text-sm tracking-wide">{course.discount}</span>
                                </div>

                                <div className="flex items-center gap-2 text-rose-500 font-bold text-sm mb-6 bg-rose-50 p-2 rounded-lg justify-center animate-pulse">
                                    <Clock className="w-4 h-4" />
                                    <span>2 days left at this price!</span>
                                </div>

                                <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 transform hover:-translate-y-1">
                                    Buy Now
                                </button>

                                <p className="text-xs text-center text-gray-400 mb-8 font-medium">30-Day Money-Back Guarantee • Full Lifetime Access</p>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider">This course includes:</h4>
                                    <ul className="space-y-3">
                                        {course.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-600 font-medium">
                                                <div className="w-6 flex justify-center mr-2"><CheckCircle className="h-4 w-4 text-indigo-500" /></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
                                    <button className="text-sm font-bold text-gray-900 hover:underline">Share</button>
                                    <button className="text-sm font-bold text-gray-900 hover:underline">Gift this course</button>
                                    <button className="text-sm font-bold text-gray-900 hover:underline">Apply Coupon</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
