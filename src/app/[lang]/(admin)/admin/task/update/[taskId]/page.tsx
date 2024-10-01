import React from 'react'
import UpdateTask from '@/components/_admin/taskList/updateTask'
function UpdateTaskPage({ params }: any) {
    const { taskId } = params

    return (
        <UpdateTask slug={taskId} />
    )
}

export async function generateMetadata({ params }: any) {
    const { taskId } = params
    return {
        title: `Update Task - ${taskId}`
    }
}


export default UpdateTaskPage