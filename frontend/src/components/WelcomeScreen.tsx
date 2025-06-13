
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Sparkles, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface WelcomeScreenProps {
  onNext: () => void;
  onEmailConnect: (email: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext, onEmailConnect }) => {
  const [connectedEmails, setConnectedEmails] = useState<string[]>([]);

  const handleEmailConnect = (provider: 'gmail' | 'outlook') => {
    // Simulate OAuth connection
    const mockEmail = provider === 'gmail' ? 'user@gmail.com' : 'user@outlook.com';
    setConnectedEmails(prev => [...prev, mockEmail]);
    onEmailConnect(mockEmail);
    toast({
      title: "Email Connected!",
      description: `Successfully connected ${provider}`,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">Taskflow AI</h1>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 leading-tight">
            👋 Welcome to Taskflow
          </h2>
          <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
            This assistant helps you turn emails and notes into clear, actionable tasks — all in one place.
            Connect your sources, choose how you want to work, and let the assistant do the rest.
          </p>
        </div>

        {/* Connection Cards */}
        <div className="grid gap-4">
          <Card className="border-2 hover:border-blue-200 transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>Connect Gmail</span>
                {connectedEmails.some(email => email.includes('gmail')) && (
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                )}
              </CardTitle>
              <CardDescription>
                Connect your Gmail account to automatically scan for actionable tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => handleEmailConnect('gmail')}
                disabled={connectedEmails.some(email => email.includes('gmail'))}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {connectedEmails.some(email => email.includes('gmail')) ? 'Connected' : 'Connect Gmail'}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>Connect Outlook</span>
                {connectedEmails.some(email => email.includes('outlook')) && (
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                )}
              </CardTitle>
              <CardDescription>
                Connect your Outlook account to automatically scan for actionable tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => handleEmailConnect('outlook')}
                disabled={connectedEmails.some(email => email.includes('outlook'))}
                className="w-full bg-blue-600 hover:bg-blue-700"
                variant="outline"
              >
                {connectedEmails.some(email => email.includes('outlook')) ? 'Connected' : 'Connect Outlook'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Continue Button */}
        {connectedEmails.length > 0 && (
          <div className="text-center">
            <Button 
              onClick={onNext}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
            >
              Continue Setup →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
