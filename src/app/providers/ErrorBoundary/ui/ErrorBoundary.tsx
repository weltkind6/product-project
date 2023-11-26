import React, { Component, type ErrorInfo, type ReactNode } from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    // Здесь вы можете добавить логирование ошибки или отправку отчета об ошибке
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({ hasError: true })
  }

  render (): ReactNode {
    if (this.state.hasError) {
      return (
          <div>
              <PageError />
          </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
