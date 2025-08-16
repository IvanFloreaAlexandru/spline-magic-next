import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
    setIsLoading(false);
  };

  const handleError = (error: any) => {
    console.error('Spline scene error:', error);
    setError(true);
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className="fixed inset-0 w-full h-full bg-background flex items-center justify-center">
        <div className="glass-card rounded-lg p-6 text-center">
          <p className="text-destructive mb-4">Failed to load 3D scene</p>
          <p className="text-sm text-muted-foreground">Please check your internet connection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-background">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-50">
          <div className="glass-card rounded-lg p-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading 3D scene...</p>
          </div>
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/YAIOdcFy2gwjRG0k/scene.splinecode"
        onLoad={handleLoad}
        onError={handleError}
        className="w-full h-full"
      />
    </div>
  );
}