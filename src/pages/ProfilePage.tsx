import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit2, Mail, Calendar, MapPin } from 'lucide-react';

/**
 * SHADCN/UI BOILERPLATE PROFILE PAGE
 * 
 * This demonstrates profile components using shadcn/ui and Tailwind CSS.
 * All styling is handled by shadcn components with clean design.
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

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
      purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
      green: 'bg-green-50 text-green-700 ring-green-700/10',
      orange: 'bg-orange-50 text-orange-700 ring-orange-700/10',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <div className="space-y-8">
          {/* Profile Header */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <CardTitle className="text-3xl">John Doe</CardTitle>
                    <CardDescription className="text-lg">Full Stack Developer & UI/UX Designer</CardDescription>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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

                  <p className="text-muted-foreground">
                    Passionate developer with 5+ years of experience building modern web applications. 
                    Love working with React, TypeScript, and creating beautiful user experiences. 
                    Always learning and exploring new technologies.
                  </p>
                </div>
                
                <Button className="hover:-translate-y-0.5 transition-transform">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills & Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
              <CardDescription>Technologies and areas of expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className={'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ' + getBadgeColor(badge.color)}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest projects and contributions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Completed E-commerce Dashboard</p>
                    <p className="text-sm text-muted-foreground">
                      Built a comprehensive dashboard with React, TypeScript, and shadcn/ui
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Published React Component Library</p>
                    <p className="text-sm text-muted-foreground">
                      Open-sourced a collection of reusable React components
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div className="flex-1">
                    <p className="font-medium">Contributed to Open Source</p>
                    <p className="text-sm text-muted-foreground">
                      Added new features to popular UI component library
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>Feel free to reach out for collaborations or questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" className="hover:-translate-y-0.5 transition-transform">
                  Send Message
                </Button>
                <Button variant="outline" className="hover:-translate-y-0.5 transition-transform">
                  Connect
                </Button>
                <Button variant="outline" className="hover:-translate-y-0.5 transition-transform">
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}