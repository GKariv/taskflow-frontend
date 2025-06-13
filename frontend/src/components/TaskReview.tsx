
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, AlertCircle, CheckCircle, Edit } from 'lucide-react';
import { TaskEditDialog } from '@/components/TaskEditDialog';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  projectName: string;
  source: string;
  priority: 'low' | 'medium' | 'high';
  status?: 'pending' | 'approved' | 'dismissed';
}

interface TaskReviewProps {
  tasks: Task[];
  workMode: 'auto' | 'review';
  onTaskUpdate: (tasks: Task[]) => void;
  onBack: () => void;
}

export const TaskReview: React.FC<TaskReviewProps> = ({ 
  tasks, 
  workMode, 
  onTaskUpdate, 
  onBack 
}) => {
  const [currentTasks, setCurrentTasks] = useState(tasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    const updatedTasks = currentTasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    );
    setCurrentTasks(updatedTasks);
    onTaskUpdate(updatedTasks);
  };

  const approveTask = (taskId: string) => {
    updateTask(taskId, { status: 'approved' });
  };

  const dismissTask = (taskId: string) => {
    updateTask(taskId, { status: 'dismissed' });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'dismissed': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  const pendingTasks = currentTasks.filter(task => !task.status || task.status === 'pending');
  const approvedTasks = currentTasks.filter(task => task.status === 'approved');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-slate-800">Your Smart Inbox</h1>
            <p className="text-slate-600">
              Here are the tasks we've found. Review, assign, or dismiss.
            </p>
          </div>
          
          <Button 
            onClick={onBack}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{pendingTasks.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{approvedTasks.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {new Set(currentTasks.map(task => task.projectName)).size}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Task Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Tasks */}
          {pendingTasks.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                <span>Pending Review ({pendingTasks.length})</span>
              </h2>
              
              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <Card key={task.id} className="border-l-4 border-l-orange-400">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1 flex-1">
                          <CardTitle className="text-lg leading-tight">{task.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {task.description}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline" className={getPriorityColor(task.priority)}>
                          {task.priority} priority
                        </Badge>
                        <Badge variant="outline">
                          {task.projectName}
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{task.source}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => approveTask(task.id)}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          onClick={() => setEditingTask(task)}
                          size="sm"
                          variant="outline"
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          onClick={() => dismissTask(task.id)}
                          size="sm"
                          variant="outline"
                        >
                          Dismiss
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Approved Tasks */}
          {approvedTasks.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-800 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Approved Tasks ({approvedTasks.length})</span>
              </h2>
              
              <div className="space-y-3">
                {approvedTasks.map((task) => (
                  <Card key={task.id} className="border-l-4 border-l-green-400 bg-green-50/50">
                    <CardHeader className="pb-3">
                      <div className="space-y-1">
                        <CardTitle className="text-lg leading-tight text-green-800">
                          {task.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-green-700">
                          {task.description}
                        </CardDescription>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge className={getStatusColor(task.status)}>
                          Approved
                        </Badge>
                        <Badge variant="outline">
                          {task.projectName}
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {pendingTasks.length === 0 && approvedTasks.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
            <p className="text-gray-600">No tasks to review at the moment.</p>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      {editingTask && (
        <TaskEditDialog
          task={editingTask}
          onSave={(updatedTask) => {
            updateTask(updatedTask.id, updatedTask);
            setEditingTask(null);
          }}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};
