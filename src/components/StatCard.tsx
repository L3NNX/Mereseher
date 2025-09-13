import { 
  AlertCircle, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { StatCard as StatCardType } from '../types';

const iconMap = {
  AlertCircle,
  Clock,
  CheckCircle,
  AlertTriangle,
};

interface StatCardProps {
  stat: StatCardType;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = iconMap[stat.icon as keyof typeof iconMap];
  const isPositiveTrend = stat.trend > 0;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg bg-opacity-10 ${stat.color.replace('text-', 'bg-')}`}>
            <Icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600 dark:text-slate-400">
              {stat.title}
            </p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        </div>
        
        <div className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
          isPositiveTrend 
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }`}>
          {isPositiveTrend ? (
            <TrendingUp className="w-3 h-3 mr-1" />
          ) : (
            <TrendingDown className="w-3 h-3 mr-1" />
          )}
          {Math.abs(stat.trend)}%
        </div>
      </div>
    </div>
  );
}