import { useEffect } from 'react';

export interface MessageProps {
  type: 'success' | 'error';
  content: string;
  onClose: () => void;
}

function Message({ type, content, onClose }: MessageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`message ${type}`}>
      <div className="message-content">{content}</div>
      <button className="message-close" onClick={onClose} type="button">
        &times;
      </button>
    </div>
  );
}

export default Message;
