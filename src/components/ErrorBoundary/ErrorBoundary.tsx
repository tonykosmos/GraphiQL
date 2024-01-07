import React, { ErrorInfo } from 'react';

type Props = {
  children: React.ReactNode;
};
type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1 style={{ textAlign: 'center' }}>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
