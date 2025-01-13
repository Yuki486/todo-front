import React from 'react';

// タスクリストコンポーネント
function ToDoList() {
    // ダミーデータ（仮のタスクデータ）
    const dummyTasks = [
        { title: 'タスク1', details: 'これはサンプルタスクです。', createdAt: '2024-12-12' },
        { title: 'タスク2', details: 'もう1つのサンプルタスクです。', createdAt: '2024-12-11' },
    ];

    // リスト全体のスタイル
    const listStyle = {
        listStyle: 'none',
        padding: 0,
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
    };

    // 各タスクのスタイル
    const itemStyle = {
        padding: '20px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#fff',
        marginBottom: '10px',
        borderRadius: '5px',
    };

    // タスクタイトルのスタイル
    const titleStyle = {
        fontWeight: 'bold',
        marginBottom: '5px',
    };

    // 日付表示のスタイル
    const dateStyle = {
        fontSize: '12px',
        color: '#888',
    };

    return (
        <ul style={listStyle}>
            {/* 各タスクをリストとして表示 */}
            {dummyTasks.map((task, index) => (
                <li key={index} style={itemStyle}>
                    <h3 style={titleStyle}>{task.title}</h3>
                    <p>{task.details}</p>
                    <p style={dateStyle}>作成日: {task.createdAt}</p>
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;
