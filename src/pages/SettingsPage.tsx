import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/**
 * SHADCN/UI BOILERPLATE SETTINGS PAGE
 * 
 * This demonstrates form components using shadcn/ui and Tailwind CSS.
 * All form styling is handled by shadcn components with clean design.
 */
export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');
  const [visibility, setVisibility] = useState('public');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleSave = () => {
    console.log('Settings saved:', { 
      emailNotifications, 
      pushNotifications, 
      theme, 
      language, 
      visibility, 
      twoFactorAuth 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Settings
            </h1>
            <p className="text-lg text-muted-foreground">
              Configure your application preferences and account settings.
            </p>
          </div>

          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input 
                  id="displayName"
                  placeholder="Enter your display name" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email address" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input 
                  id="bio"
                  placeholder="Tell us about yourself" 
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center w-full">
                <div className="space-y-1">
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive email updates about your account activity
                  </p>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={
                    emailNotifications 
                      ? 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-primary'
                      : 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-200'
                  }
                >
                  <span
                    className={
                      emailNotifications
                        ? 'inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6'
                        : 'inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1'
                    }
                  />
                </button>
              </div>
              
              <div className="flex justify-between items-center w-full">
                <div className="space-y-1">
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Get push notifications on your device
                  </p>
                </div>
                <button
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={
                    pushNotifications 
                      ? 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-primary'
                      : 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-200'
                  }
                >
                  <span
                    className={
                      pushNotifications
                        ? 'inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6'
                        : 'inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1'
                    }
                  />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize your visual preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 max-w-xs">
                <Label htmlFor="theme">Theme</Label>
                <select 
                  id="theme"
                  value={theme} 
                  onChange={(e) => setTheme(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
              
              <div className="space-y-2 max-w-xs">
                <Label htmlFor="language">Language</Label>
                <select 
                  id="language"
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Control your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 max-w-xs">
                <Label htmlFor="visibility">Profile Visibility</Label>
                <select 
                  id="visibility"
                  value={visibility} 
                  onChange={(e) => setVisibility(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
              
              <div className="flex justify-between items-center w-full">
                <div className="space-y-1">
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <button
                  onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                  className={
                    twoFactorAuth 
                      ? 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-primary'
                      : 'relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-200'
                  }
                >
                  <span
                    className={
                      twoFactorAuth
                        ? 'inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6'
                        : 'inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1'
                    }
                  />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="hover:-translate-y-0.5 transition-transform"
            >
              Cancel
            </Button>
            <Button 
              size="lg" 
              onClick={handleSave}
              className="hover:-translate-y-0.5 transition-transform"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}