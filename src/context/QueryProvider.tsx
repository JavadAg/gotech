'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

interface IProps {
  children: JSX.Element
}

const QueryProvider: React.FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
