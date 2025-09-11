import React from 'react';
import { Edit2, Mail, Calendar, MapPin } from 'lucide-react';

/**
 * CLEAN CSS BOILERPLATE PROFILE PAGE
 * 
 * This demonstrates profile components using custom CSS and Tailwind CSS.
 * All styling is handled by custom CSS components with clean design.
 */
export default function ProfilePage() {
  const userStats = [
    { label: 'Projects', value: '12' },
    { label: 'Followers', value: '543' },
    { label: 'Following', value: '289' },
  ];

  const badges = [
    { label: 'React Expert', color: 'blue' },
    { label: 'TypeScript', color: 'purple' },
    { label: 'UI/UX Design', color: 'green' },
    { label: 'Full Stack', color: 'orange' },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="card">
            <div className="card-header">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="card-title text-3xl">John Doe</h1>
                    <p className="card-description text-lg">Full Stack Developer & UI/UX Designer</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      john.doe@example.com
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Joined March 2023
                    </div>
                  </div>

                  <p className="text-gray-600">
                    Passionate developer with 5+ years of experience building modern web applications. 
                    Love working with React, TypeScript, and creating beautiful user experiences. 
                    Always learning and exploring new technologies.
                  </p>
                </div>
                
                <button className="btn btn-primary hover:-translate-y-0.5 transition-transform">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userStats.map((stat, index) => (
              <div key={index} className="card">
                <div className="card-content pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills & Badges */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Skills & Expertise</h2>
              <p className="card-description">Technologies and areas of expertise</p>
            </div>
            <div className="card-content">
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className={`badge badge-${badge.color}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Recent Activity</h2>
              <p className="card-description">Latest projects and contributions</p>
            </div>
            <div className="card-content space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg border bg-white">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Completed E-commerce Dashboard</p>
                    <p className="text-sm text-gray-600">
                      Built a comprehensive dashboard with React, TypeScript, and custom CSS
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border bg-white">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Published React Component Library</p>
                    <p className="text-sm text-gray-600">
                      Open-sourced a collection of reusable React components
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border bg-white">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Contributed to Open Source</p>
                    <p className="text-sm text-gray-600">
                      Added new features to popular UI component library
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Get In Touch</h2>
              <p className="card-description">Feel free to reach out for collaborations or questions</p>
            </div>
            <div className="card-content">
              <div className="flex gap-4">
                <button className="btn btn-outline hover:-translate-y-0.5 transition-transform">
                  Send Message
                </button>
                <button className="btn btn-outline hover:-translate-y-0.5 transition-transform">
                  Connect
                </button>
                <button className="btn btn-outline hover:-translate-y-0.5 transition-transform">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}