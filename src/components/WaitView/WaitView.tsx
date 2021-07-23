import React from 'react';
import { waitText } from '../../selectors/wait'
import { useRecoilValue } from 'recoil';
import './WaitView.css';

const WaitView = () => {
  const text = useRecoilValue(waitText);
  return (
    <div className="WaitView">
      {text}
    </div>
  )
}

export default WaitView;
