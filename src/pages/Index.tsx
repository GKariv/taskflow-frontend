
import React, { useState } from 'react';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { ModeSelector } from '@/components/ModeSelector';
import { InboxScan } from '@/components/InboxScan';
import { TaskReview } from '@/components/TaskReview';

type AppStep = 'welcome' | 'mode_selector' | 'inbox_scan' | 'task_review';

interface AppState {
  step: AppStep;
  connectedEmail?: string;
  workMode?: 'auto' | 'review';
  extractedTasks?: any[];
  tasks?: any[];
}

const Index = () => {
  const [appState, setAppState] = useState<AppState>({
    step: 'welcome'
  });

  const updateState = (updates: Partial<AppState>) => {
    setAppState(prev => ({ ...prev, ...updates }));
  };

  const goToStep = (step: AppStep) => {
    setAppState(prev => ({ ...prev, step }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {appState.step === 'welcome' && (
        <WelcomeScreen 
          onNext={() => goToStep('mode_selector')}
          onEmailConnect={(email) => updateState({ connectedEmail: email })}
        />
      )}
      
      {appState.step === 'mode_selector' && (
        <ModeSelector 
          onNext={(mode) => {
            updateState({ workMode: mode });
            goToStep('inbox_scan');
          }}
          onBack={() => goToStep('welcome')}
        />
      )}
      
      {appState.step === 'inbox_scan' && (
        <InboxScan 
          connectedEmail={appState.connectedEmail}
          onComplete={(tasks) => {
            updateState({ extractedTasks: tasks, tasks });
            goToStep('task_review');
          }}
        />
      )}
      
      {appState.step === 'task_review' && (
        <TaskReview 
          tasks={appState.tasks || []}
          workMode={appState.workMode || 'review'}
          onTaskUpdate={(updatedTasks) => updateState({ tasks: updatedTasks })}
          onBack={() => goToStep('inbox_scan')}
        />
      )}
    </div>
  );
};

export default Index;
