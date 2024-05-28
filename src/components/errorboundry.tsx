'use client';

import React from "react";


''

export class ErrorBoundary extends React.Component<{fallback:any,children:React.ReactNode},{ hasError: boolean }> {
    constructor(props: {fallback:any,children:React.ReactNode}) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, info: { componentStack: any; }) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      console.log({ error, info })
    //   logErrorToMyService(error, info.componentStack);
    }
  
    render() {
      if (this.state.hasError) {
        
        // You can render any custom fallback UI
        return this.props.fallback;
      }
  
      return this.props.children;
    }
  }