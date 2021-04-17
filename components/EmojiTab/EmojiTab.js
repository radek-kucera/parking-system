import React from 'react';
import cls from './EmojiTab.module.scss';

const EmojiTab = ({ emoji, title, ...props }) => {
  return (
    <div className={cls['emoji-tab']} {...props}>
      <h1>{emoji}</h1>
      <span>{title}</span>
    </div>
  );
};

export default EmojiTab;
