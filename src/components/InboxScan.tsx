
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Mail, Sparkles, CheckCircle } from 'lucide-react';

interface InboxScanProps {
  connectedEmail?: string;
  onComplete: (tasks: any[]) => void;
}

export const InboxScan: React.FC<InboxScanProps> = ({ connectedEmail, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('Connecting to email...');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const steps = [
      'Connecting to email...',
      'Scanning recent emails...',
      'Identifying actionable content...',
      'Extracting tasks with AI...',
      'Organizing into projects...',
      'Complete!'
    ];

    let currentStepIndex = 0;
    const interval = setInterval(() => {
      currentStepIndex++;
      setProgress((currentStepIndex / steps.length) * 100);
      
      if (currentStepIndex < steps.length) {
        setCurrentStep(steps[currentStepIndex]);
      }
      
      if (currentStepIndex >= steps.length - 1) {
        clearInterval(interval);
        setIsComplete(true);
        
        // Simulate extracted tasks
        setTimeout(() => {
          const mockTasks = [
            {
              id: '1',
              title: 'Send updated Q3 report to marketing',
              description: 'Compile and send the updated Q3 report to marketing team',
              dueDate: '2024-01-18',
              projectName: 'Q3 Reports',
              source: 'noa@example.com',
              priority: 'high'
            },
            {
              id: '2',
              title: 'Prepare client materials for Avraham meeting',
              description: 'Gather and organize all necessary materials for the upcoming client meeting',
              dueDate: '2024-01-22',
              projectName: 'Client Prep',
              source: 'itay@example.com',
              priority: 'medium'
            },
            {
              id: '3',
              title: 'Review and approve budget proposal',
              description: 'Review the submitted budget proposal and provide feedback',
              dueDate: '2024-01-20',
              projectName: 'Budget Planning',
              source: 'finance@example.com',
              priority: 'high'
            }
          ];
          onComplete(mockTasks);
        }, 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            {isComplete ? (
              <CheckCircle className="w-8 h-8 text-white" />
            ) : (
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            )}
          </div>
          
          <h2 className="text-3xl font-bold text-slate-800">
            {isComplete ? 'Scan Complete!' : 'Scanning your inbox...'}
          </h2>
          
          <p className="text-lg text-slate-600">
            {isComplete 
              ? 'We found actionable tasks in your emails. Let\'s review them!'
              : 'Looking for emails with potential tasks...'
            }
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>Email Scan Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">{currentStep}</span>
                <span className="text-slate-500">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            {connectedEmail && (
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Mail className="w-4 h-4" />
                  <span>Scanning: {connectedEmail}</span>
                </div>
              </div>
            )}

            {isComplete && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Found 3 actionable tasks</span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  Ready to review and organize into projects
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
