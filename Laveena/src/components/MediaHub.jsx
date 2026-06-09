import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Heart, MessageCircle, Bookmark, Eye } from 'lucide-react';

// YouTube videos data
const youtubeVideos = [
  {
    id: 1,
    title: 'Understanding PRP Treatment for Skin Renewal',
    views: '12.5K',
    duration: '8:24',
    thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Painless Root Canal: What to Expect',
    views: '8.3K',
    duration: '5:17',
    thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Teeth Whitening Results - Before & After',
    views: '15K',
    duration: '3:45',
    thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
  },
];

// Instagram posts data
const instagramPosts = [
  {
    id: 1,
    likes: '2.4K',
    comments: '156',
    image: 'https://images.unsplash.com/photo-1598300042247-d088105c4bf2?q=80&w=600&auto=format&fit=crop',
    caption: 'Bio-stimulation for lasting results. Skin renewal from within. ✨',
  },
  {
    id: 2,
    likes: '1.8K',
    comments: '92',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop',
    caption: 'Another happy smile transformed today! 😀',
  },
  {
    id: 3,
    likes: '3.1K',
    comments: '245',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf6723e85?q=80&w=600&auto=format&fit=crop',
    caption: 'Behind the scenes at LBS Dentofacial Centre 🏥',
  },
];

export default function MediaHub() {
  const [activeTab, setActiveTab] = useState('youtube');

  return (
    <section id="media" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-[#0D9488] font-bold tracking-widest uppercase text-sm mb-3">
            Watch & Learn
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
            Follow Us on <span className="text-[#0D9488]">Social Media</span>
          </h3>
          <p className="text-slate-500 text-lg">
            Stay updated with latest treatments, tips, and patient stories.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'youtube', label: 'YouTube Videos', icon: '▶' },
            { id: 'instagram', label: 'Instagram', icon: '📸' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#0A1628] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* YouTube Section */}
        {activeTab === 'youtube' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Featured Video */}
            <div className="mb-8 rounded-3xl overflow-hidden bg-[#0A1628] relative group cursor-pointer">
              <div className="relative aspect-video">
                <img
                  src={youtubeVideos[0].thumbnail}
                  alt="Featured Video"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <h4 className="text-white text-xl md:text-2xl font-bold mb-2">{youtubeVideos[0].title}</h4>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span>{youtubeVideos[0].views} views</span>
                    <span>•</span>
                    <span>{youtubeVideos[0].duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {youtubeVideos.slice(1).map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play size={24} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-medium">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="font-bold text-[#0A1628] mb-1 group-hover:text-[#0D9488] transition-colors line-clamp-2">
                      {video.title}
                    </h5>
                    <p className="text-slate-400 text-sm">{video.views} views</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Subscribe CTA */}
            <div className="mt-10 text-center">
              <a
                href="https://www.youtube.com/@DrLaveena"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20"
              >
                <Play size={18} fill="white" />
                Subscribe to Our Channel
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        )}

        {/* Instagram Section */}
        {activeTab === 'instagram' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {instagramPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 p-4 border-b border-slate-50">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      DL
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#0A1628]">drlaveenachoudhary</p>
                      <p className="text-xs text-slate-400">Batla House, Delhi</p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-square">
                    <img
                      src={post.image}
                      alt="Instagram Post"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Actions */}
                  <div className="p-4">
                    <div className="flex items-center gap-4 mb-3">
                      <Heart size={22} className="text-slate-700 hover:text-red-500 transition-colors" />
                      <MessageCircle size={22} className="text-slate-700" />
                      <ExternalLink size={22} className="text-slate-700" />
                      <Bookmark size={22} className="text-slate-700 ml-auto" />
                    </div>
                    <p className="text-sm text-slate-600">
                      <span className="font-bold text-[#0A1628]">drlaveenachoudhary</span>{' '}
                      {post.caption}
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      {post.likes} likes • {post.comments} comments
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Follow CTA */}
            <div className="mt-10 text-center">
              <a
                href="https://www.instagram.com/drlaveenachoudhary"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791-2.209-4-4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Follow on Instagram
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
