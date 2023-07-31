import React from 'react';

const Livechat = () => {
    return (
        <div>
            <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">Hi</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">Hlw</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info"></div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-success"></div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning"></div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error"></div>
</div>
        </div>
    );
};

export default Livechat;