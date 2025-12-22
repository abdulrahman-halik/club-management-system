import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // You can also log the error to an error reporting service here
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8 text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Something went wrong.
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            We apologize for the inconvenience. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Refresh Page
                        </button>
                        {import.meta.env.MODE === 'development' && this.state.error && (
                            <details className="mt-4 text-left p-4 bg-red-50 text-red-800 rounded overflow-auto max-h-64 text-xs font-mono">
                                <summary>Error Details</summary>
                                {this.state.error && this.state.error.toString()}
                                <br />
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
