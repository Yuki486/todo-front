import React from 'react';

// ヘッダーコンポーネント
function Header() {
    // コンポーネント全体のスタイル
    const headerStyle = {
        textAlign: 'center',
        margin: '20px 0',
    };

    // タイトルのスタイル
    const titleStyle = {
        color: '#333',
        fontSize: '2.5rem', // タイトルを見やすくするためにサイズを大きく設定
    };

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>My ToDo App</h1>
        </header>
    );
}

export default Header;
