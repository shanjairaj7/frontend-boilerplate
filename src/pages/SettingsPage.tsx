import React, { useState } from 'react';

/**
 * CLEAN CSS BOILERPLATE SETTINGS PAGE
 * 
 * This demonstrates form components using custom CSS and Tailwind CSS.
 * All form styling is handled by custom CSS components with clean design.
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Settings
            </h1>
            <p className="text-lg text-gray-600">
              Configure your application preferences and account settings.
            </p>
          </div>

          {/* Profile Settings */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Profile Settings</h2>
              <p className="card-description">Update your personal information</p>
            </div>
            <div className="card-content space-y-4">
              <div className="space-y-2">
                <label htmlFor="displayName" className="label">Display Name</label>
                <input 
                  id="displayName"
                  className="input"
                  placeholder="Enter your display name" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="label">Email Address</label>
                <input 
                  id="email"
                  type="email"
                  className="input" 
                  placeholder="Enter your email address" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="bio" className="label">Bio</label>
                <input 
                  id="bio"
                  className="input"
                  placeholder="Tell us about yourself" 
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Notification Preferences</h2>
              <p className="card-description">Manage how you receive updates</p>
            </div>
            <div className="card-content space-y-6">
              <div className="flex justify-between items-center w-full">
                <div className="space-y-1">
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-600">
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
                  <p className="text-sm text-gray-600">
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
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Appearance</h2>
              <p className="card-description">Customize your visual preferences</p>
            </div>
            <div className="card-content space-y-4">
              <div className="space-y-2 max-w-xs">
                <label htmlFor="theme" className="label">Theme</label>
                <select 
                  id="theme"
                  value={theme} 
                  onChange={(e) => setTheme(e.target.value)}
                  className="input"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
              
              <div className="space-y-2 max-w-xs">
                <label htmlFor="language" className="label">Language</label>
                <select 
                  id="language"
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="input"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Privacy & Security</h2>
              <p className="card-description">Control your account security settings</p>
            </div>
            <div className="card-content space-y-6">
              <div className="space-y-2 max-w-xs">
                <label htmlFor="visibility" className="label">Profile Visibility</label>
                <select 
                  id="visibility"
                  value={visibility} 
                  onChange={(e) => setVisibility(e.target.value)}
                  className="input"
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
              
              <div className="flex justify-between items-center w-full">
                <div className="space-y-1">
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600">
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
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-6">
            <button 
              className="btn btn-outline btn-lg hover:-translate-y-0.5 transition-transform"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="btn btn-primary btn-lg hover:-translate-y-0.5 transition-transform"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}