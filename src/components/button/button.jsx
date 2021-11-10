import React from 'react';
import './button.css';
function Button({ label }) {
  return (
    <div className="button-style" data-testid="button">
      hello snapshot test{label}
    </div>
  );
}

export default Button;
