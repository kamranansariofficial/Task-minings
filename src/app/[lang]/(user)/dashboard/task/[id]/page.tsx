import TaskDetails from '@/components/_dashboard/tasks/taskDetails';
import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  return <TaskDetails id={params?.id} />;
}
