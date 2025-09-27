import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.cf016538be234b319fd1fa679bbb35a9',
  appName: 'WIMB - Where Is My Bus',
  webDir: 'dist',
  server: {
    url: 'https://cf016538-be23-4b31-9fd1-fa679bbb35a9.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1d4ed8',
      showSpinner: false
    }
  }
};

export default config;