import { createRoot } from 'react-dom/client';
import MessageContainer, { MessageProps } from './message-container';
import './index.scss';

const showMessage = (type: MessageProps['type'], content: string) => {
  // 创建一个新的 div 来挂载消息
  const div = document.createElement('div');
  document.body.appendChild(div);

  const root = createRoot(div);

  const onClose = () => {
    // 卸载组件并删除 div
    root.unmount();
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  // 渲染消息到新的 div 中
  root.render(<MessageContainer type={type} content={content} onClose={onClose} />);
};

// 导出全局 API
const message = {
  success: (content: string) => showMessage('success', content),
  error: (content: string) => showMessage('error', content),
};

export default message;
