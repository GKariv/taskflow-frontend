
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Zap, Eye } from 'lucide-react';

interface ModeSelectorProps {
  onNext: (mode: 'auto' | 'review') => void;
  onBack: () => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ onNext, onBack }) => {
  const [selectedMode, setSelectedMode] = useState<'auto' | 'review'>('review');

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-800">
            How would you like to work?
          </h2>
          <p className="text-lg text-slate-600">
            Choose how Taskflow AI should handle your extracted tasks
          </p>
        </div>

        {/* Mode Selection */}
        <div className="grid gap-6">
          <Card 
            className={`border-2 cursor-pointer transition-all ${
              selectedMode === 'auto' 
                ? 'border-blue-500 bg-blue-50 shadow-lg' 
                : 'border-gray-200 hover:border-blue-200'
            }`}
            onClick={() => setSelectedMode('auto')}
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <span>Auto Mode</span>
              </CardTitle>
              <CardDescription className="text-base">
                Tasks are automatically sorted into projects. Perfect for busy professionals who want 
                everything organized without manual intervention.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Fully automated task organization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Smart project suggestions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Minimal user input required</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className={`border-2 cursor-pointer transition-all ${
              selectedMode === 'review' 
                ? 'border-blue-500 bg-blue-50 shadow-lg' 
                : 'border-gray-200 hover:border-blue-200'
            }`}
            onClick={() => setSelectedMode('review')}
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-blue-600" />
                <span>Review Mode</span>
              </CardTitle>
              <CardDescription className="text-base">
                You approve each task before it's organized. Ideal for users who want full control 
                over their task management process.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Manual approval for each task</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Edit tasks before organizing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Full control over organization</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            onClick={onBack}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
          
          <Button 
            onClick={() => onNext(selectedMode)}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8"
          >
            Start Scanning →
          </Button>
        </div>
      </div>
    </div>
  );
};
