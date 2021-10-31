import React from 'react'
import AppContent from './AppContent';
import AppLayout from './AppLayout';
import AppMenu from './AppMenu';

const Index = () => {
    return <AppLayout>
      <AppMenu />
      <AppContent content="Hi, Sir"/>
    </AppLayout>
}
export default Index