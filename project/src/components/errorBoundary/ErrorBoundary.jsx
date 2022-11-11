import React, { useEffect, useState } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            // <h1>Something went wrong.</h1>
            <div style={{    backgroundColor: "rgb(204 226 241 / 45%)", height: "100Vh"}}>
                <div style={{top: "15%", left: "20%", position: "absolute",textAlign: "justify"}}>
                <h1 style={{color:" #0006ff", fontSize: "3em", fontWeight: "400"}}>:-(</h1>
                <h1 style={{color:" #0006ff",fontWeight: "400"}}>Something went wrong.</h1>
                <h4>We can't get that information right now. Please try again later</h4>
                <h2 style={{color:" #0006ff",fontWeight: "400"}}><ArrowCircleRightOutlinedIcon sx={{mr:2}}/> Refresh the page</h2>
                </div>
            </div>
        )
        
      }
  
      return this.props.children; 
    }
  }
  export default ErrorBoundary