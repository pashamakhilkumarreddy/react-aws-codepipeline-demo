import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true,
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      <h1 className='has-text-centered is-size-1'>Something went wrong.</h1>;
    }
    const { children } = this.props;
    return children;
  }
}
